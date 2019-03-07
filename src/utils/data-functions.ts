import { mean, standardDeviation } from "simple-statistics"
import { fields, gameValues } from "./game-constants"
// Types:
interface TotalStats {
  totalMeans: {
    [s: string]: number
  }
  totalStdDeviations: {
    [s: string]: number
  }
  originalData: Score[]
}
type GameItem = "Cargo" | "Hatch Panel"
export interface ScoresObj {
  "Robot Starting Platform": "level 1" | "level 2"
  "Leave Habitat": "TRUE" | "FALSE"
  "Habitat Return": "Did not return" | "level 1" | "level 2" | "level 3"
  "Team Number": string | number
  [s: string]: string | number
}
export interface Score {
  Cargo: number
  "Hatch Panel": number
  "Sandstorm Cross": number
  "Habitat Return": number
  "Total Score": number
  "Team Number": number
  [s: string]: number
}
export interface MatchData {
  "Team Number": string | number
  [s: string]: any
}
interface Stats {
  "Mean Number of Balls": { mean: number; standardDeviation: number }
  "Mean Number of Rings": { mean: number; standardDeviation: number }
  "Points Scored": { mean: number; standardDeviation: number }
  [key: string]: { mean: number; standardDeviation: number }
}

export interface TeamCollection {
  originalScores: Score[] | []
  teams: {
    [s: string]: {
      matchData: MatchData[]
      stats: Stats | {}
    }
  }
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

const scoringFields = Object.keys(fields)
  .map(key => fields[key])
  .reduce((acc, val) => acc.concat(val), [])
  .filter(f => typeof f === "object" && f.scoring === true)
  .map(f => (typeof f === "object" ? f["field-name"] : f))
export const calculateScore = (data: ScoresObj): Score => {
  const scoreCargo =
    getGameItemKeyFromMatchDataKey(scoringFields, "Cargo")
      .map(key => data[key])
      .reduce((pv: number, cv: any) => pv + cv, 0) * gameValues.Cargo

  const scoreHatchPanel =
    getGameItemKeyFromMatchDataKey(scoringFields, "Hatch Panel")
      .map(key => data[key])
      .reduce((pv: number, cv: any) => pv + cv, 0) * gameValues["Hatch Panel"]
  const scoreHabitatReturn =
    // @ts-ignore
    gameValues["Habitat Return"][data["Habitat Return"]] || 0
  const scoreSandstormCross =
    // @ts-ignore
    data["Leave Habitat"] === "TRUE"
      ? gameValues["Sandstorm Cross"][data["Robot Starting Platform"]]
      : 0
  return {
    Cargo: scoreCargo,
    "Hatch Panel": scoreHatchPanel,
    "Habitat Return": scoreHabitatReturn,
    "Sandstorm Cross": scoreSandstormCross,
    // @ts-ignore
    "Team Number": parseInt(data["Team Number"]),
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
              calculateScore(
                scoringFields.reduce<ScoresObj>(
                  (ogObj, key) => ({
                    ...ogObj,
                    [key]: matchData[key],
                  }),
                  {
                    "Robot Starting Platform": "level 1",
                    "Leave Habitat": "FALSE",
                    "Number of Hatch Panels(Sandstorm)": 0,
                    "Number of Cargo(Sandstorm)": 0,
                    "Number of Hatch Panels(Teleop)": 0,
                    "Number of Cargo(Teleop)": 0,
                    "Habitat Return": "Did not return",
                    "Team Number": matchData["Team Number"],
                  }
                )
              ),
            ],
          }
        : {
            teams: {
              ...teamTotals.teams,
              [matchData["Team Number"]]: { matchData: [matchData], stats: {} },
            },
            originalScores: [
              ...teamTotals.originalScores,
              calculateScore(
                scoringFields.reduce<ScoresObj>(
                  (ogObj, key) => ({
                    ...ogObj,
                    [key]: matchData[key],
                  }),
                  {
                    "Robot Starting Platform": "level 1",
                    "Leave Habitat": "FALSE",
                    "Number of Hatch Panels(Sandstorm)": 0,
                    "Number of Cargo(Sandstorm)": 0,
                    "Number of Hatch Panels(Teleop)": 0,
                    "Number of Cargo(Teleop)": 0,
                    "Habitat Return": "Did not return",
                    "Team Number": matchData["Team Number"],
                  }
                )
              ),
            ],
          }
    },
    {
      teams: {},
      originalScores: [],
    }
  )

// Calculate Statistics(individual means, stds, and zscores for each team) functions:
export const calculateStatistics = (d: TeamCollection): TeamCollection => {
  const calculateStats = (matchDataArray: MatchData[]) => {
    const keysWithNumbers = Object.keys(matchDataArray[0]).filter(key =>
      /Number/.test(key)
    )
    return keysWithNumbers.reduce((statisticsObj: any, key) => {
      return {
        ...statisticsObj,
        [key]: {
          mean: mean(
            matchDataArray.map((md: MatchData) => parseInt(md[key], 10))
          ),
          standardDeviation: standardDeviation(
            matchDataArray.map((md: MatchData) => parseInt(md[key], 10))
          ),
        },
      }
    }, {})
  }
  const teams = Object.keys(d.teams).reduce((dWithStats, key) => {
    return {
      ...dWithStats,
      [key]: {
        ...d.teams[key],
        stats: calculateStats(d.teams[key].matchData),
      },
    }
  }, {})

  return {
    ...d,
    teams,
  }
}
