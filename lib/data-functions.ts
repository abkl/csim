import { mean, sampleStandardDeviation } from "simple-statistics"
import { fields, gameValues } from "../src/utils/game-constants"
// Types:
interface TotalStats {
  totalMeans: {
    [s: string]: number
  }
  totalStdDeviations: {
    [s: string]: number
  }
}
type GameItem = "Cargo" | "Hatch Panel"
export interface ScoresObj {
  "Robot Starting Platform": "level 1" | "level 2"
  "Leave Habitat": "TRUE" | "FALSE"
  "Habitat Return": "Did not return" | "level 1" | "level 2" | "level 3"
  "Team Number": string
  "Match Number": string
  "Your Name": string
  [s: string]: string
}
export interface Score {
  Cargo: number
  "Hatch Panel": number
  "Sandstorm Cross": number
  "Habitat Return": number
  "Total Score": number
  "Team Number": string
  [s: string]: number | string
}
export interface MatchData {
  "Team Number": string
  "Match Number": string
  [s: string]: any
}
interface Stats {
  "Mean Number of Balls": { mean: number; standardDeviation: number }
  "Mean Number of Rings": { mean: number; standardDeviation: number }
  "Points Scored": { mean: number; standardDeviation: number }
  [key: string]: { mean: number; standardDeviation: number }
}
export interface Teams {
  [s: string]: {
    matchData: MatchData[]
    stats: Stats | {}
  }
}
export interface TeamCollection {
  originalScores: Score[] | []
  teams: Teams
}

// Convert Sheets data into Collection of Teams Objects Functions:
export const sheetsDataToJSON = (sheetsData: any[][]) => {
  if (sheetsData.length < 2) {
    throw Error("invalid data passed!")
  }
  const dataKeys = sheetsData[0]
  const d = sheetsData.slice(1)
  return d.map(rows =>
    rows.reduce(
      (currentObject, cell, index) => ({
        ...currentObject,
        [dataKeys[index]]: cell,
      }),
      {}
    )
  )
}

// Transform Match Data into total game Items and calculate total scores functions:
export const getGameItemKeyFromMatchDataKey = (
  keys: string[],
  gameItem: GameItem,
  dropped?: boolean
) =>
  !dropped
    ? keys.filter(key => RegExp(gameItem).test(key) && !/dropped/.test(key))
    : keys.filter(key => RegExp(gameItem).test(key) && /dropped/.test(key))

export const calculateScore = (data: ScoresObj): Score => {
  const scoreCargo =
    getGameItemKeyFromMatchDataKey(Object.keys(data), "Cargo")
      .map(key => data[key])
      .reduce((pv: number, cv) => pv + parseInt(cv, 10), 0) * gameValues.Cargo
  const scoreHatchPanel =
    getGameItemKeyFromMatchDataKey(Object.keys(data), "Hatch Panel")
      .map(key => data[key])
      .reduce((pv: number, cv) => pv + parseInt(cv, 10), 0) *
    gameValues["Hatch Panel"]
  const scoreHabitatReturn =
    // @ts-ignore
    gameValues["Habitat Return"][data["Habitat Return"]] || 0
  const scoreSandstormCross =
    // @ts-ignore
    data["Leave Habitat"] === "TRUE"
      ? gameValues["Sandstorm Cross"][data["Robot Starting Platform"]]
      : 0
  return {
    "Match Number": data["Match Number"],
    Cargo: scoreCargo,
    "Hatch Panel": scoreHatchPanel,
    "Habitat Return": scoreHabitatReturn,
    "Sandstorm Cross": scoreSandstormCross,
    // @ts-ignore
    "Team Number": data["Team Number"],
    "Scouter Name": data["Your Name"],
    "Total Score":
      scoreCargo + scoreHatchPanel + scoreSandstormCross + scoreHabitatReturn,
  }
}

export const collectMatchDataIntoTeamObj = (d: MatchData[]): TeamCollection =>
  d.reduce(
    (teamTotals: TeamCollection, matchData) => {
      return teamTotals.teams[matchData["Team Number"]]
        ? {
            teams: {
              ...teamTotals.teams,
              [matchData["Team Number"]]: {
                matchData: [
                  ...teamTotals.teams[matchData["Team Number"]].matchData,
                  matchData,
                ],
                stats: {},
              },
            },
            originalScores: [
              ...teamTotals.originalScores,
              calculateScore(matchData as ScoresObj),
            ],
          }
        : {
            teams: {
              ...teamTotals.teams,
              [matchData["Team Number"]]: { matchData: [matchData], stats: {} },
            },
            originalScores: [
              ...teamTotals.originalScores,
              calculateScore(matchData as ScoresObj),
            ],
          }
    },
    {
      teams: {},
      originalScores: [],
    }
  )
export const calculateTotalStats = (scores: Score[]): TotalStats => {
  const intermediateObj = scores.reduce(
    (pv, cv) => {
      return {
        Cargo: [...pv.Cargo, cv.Cargo],
        "Hatch Panel": [...pv["Hatch Panel"], cv["Hatch Panel"]],
        "Sandstorm Cross": [...pv["Sandstorm Cross"], cv["Sandstorm Cross"]],
        "Habitat Return": [...pv["Habitat Return"], cv["Habitat Return"]],
        "Total Score": [...pv["Total Score"], cv["Total Score"]],
      }
    },
    {
      Cargo: [],
      "Hatch Panel": [],
      "Sandstorm Cross": [],
      "Habitat Return": [],
      "Total Score": [],
    }
  )

  return {
    totalMeans: {
      Cargo: intermediateObj.Cargo.length > 0 ? mean(intermediateObj.Cargo) : 0,
      "Hatch Panel":
        intermediateObj["Hatch Panel"].length > 0
          ? mean(intermediateObj["Hatch Panel"])
          : 0,
      "Sandstorm Cross":
        intermediateObj["Sandstorm Cross"].length > 0
          ? mean(intermediateObj["Sandstorm Cross"])
          : 0,
      "Habitat Return":
        intermediateObj["Habitat Return"].length > 0
          ? mean(intermediateObj["Habitat Return"])
          : 0,
      "Total Score":
        intermediateObj["Total Score"].length > 0
          ? mean(intermediateObj["Total Score"])
          : 0,
    },
    totalStdDeviations: {
      Cargo:
        intermediateObj.Cargo.length > 0
          ? sampleStandardDeviation(intermediateObj.Cargo)
          : 0,
      "Hatch Panel":
        intermediateObj["Hatch Panel"].length > 0
          ? sampleStandardDeviation(intermediateObj["Hatch Panel"])
          : 0,
      "Sandstorm Cross":
        intermediateObj["Sandstorm Cross"].length > 0
          ? sampleStandardDeviation(intermediateObj["Sandstorm Cross"])
          : 0,
      "Habitat Return":
        intermediateObj["Habitat Return"].length > 0
          ? sampleStandardDeviation(intermediateObj["Habitat Return"])
          : 0,
      "Total Score":
        intermediateObj["Total Score"].length > 0
          ? sampleStandardDeviation(intermediateObj["Total Score"])
          : 0,
    },
  }
}
