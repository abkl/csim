import { mean, standardDeviation } from "simple-statistics"

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
export interface MatchData {
  "Team number": string
  [s: string]: any
}
export interface TeamCollection {
  [s: string]: {
    matchData: MatchData[]
    stats?: {
      [key: string]: { mean: number; standardDeviation: number }
    }
  }
}
export const collectMatchDataIntoTeamObj = (d: MatchData[]): TeamCollection =>
  d.reduce((teamTotals: any, matchData) => {
    return teamTotals[matchData["Team number"]]
      ? {
          ...teamTotals,
          [matchData["Team number"]]: {
            matchData: [
              ...teamTotals[matchData["Team number"]].matchData,
              matchData,
            ],
          },
        }
      : {
          ...teamTotals,
          [matchData["Team number"]]: { matchData: [matchData] },
        }
  }, {})

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
  return Object.keys(d).reduce((dWithStats, key) => {
    return {
      ...dWithStats,
      [key]: {
        ...d[key],
        stats: calculateStats(d[key].matchData),
      },
    }
  }, {})
}
