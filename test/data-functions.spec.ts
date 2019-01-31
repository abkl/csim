import {
  sheetsDataToJSON,
  collectMatchDataIntoTeamObj,
  calculateStatistics,
} from "../src/utils/data-functions"
import { mean, standardDeviation } from "simple-statistics"
import data from "../src/utils/last-year-data"
describe("sheetsDataToJSON", () => {
  test("should properly converts data from google sheets to JSON", () => {
    const mockData = [["hello", "world"], [0, 1], [1, 0]]
    const mockData2 = [
      ["team", "cubes", "scale", "auto"],
      ["4159", 612, 0, false],
      ["245", 534, 1, true],
    ]
    expect(sheetsDataToJSON(mockData)).toEqual([
      {
        hello: 0,
        world: 1,
      },
      {
        hello: 1,
        world: 0,
      },
    ])
    expect(sheetsDataToJSON(mockData2)).toEqual([
      {
        auto: false,
        cubes: 612,
        scale: 0,
        team: "4159",
      },
      {
        auto: true,
        cubes: 534,
        scale: 1,
        team: "245",
      },
    ])
  })
  test("should throw an error when invalid data is passed to it", () => {
    const mockData = [["hello"]]
    expect(() => {
      sheetsDataToJSON(mockData)
    }).toThrowError(Error("invalid data passed!"))
  })
})

describe("matchData to teamCollection", () => {
  test("should collect matchData to respective teams", () => {
    const team114 = data.filter(value => value["Team number"] === "114")
    const team2643 = data.filter(value => value["Team number"] === "2643")
    const a = team114.concat(team2643)
    expect(collectMatchDataIntoTeamObj(a)).toEqual({
      "114": {
        matchData: team114,
      },
      "2643": {
        matchData: team2643,
      },
    })
  })
  test("should take a TeamCollection with matchData and return statistics", () => {
    const mockData = {
      "114": {
        matchData: [
          { "Team number": "114", Number: 1, Number2: "4" },
          { "Team number": "114", Number: 2, Number2: "4" },
          { "Team number": "114", Number: 2, Number2: "4" },
        ],
      },
      "254": {
        matchData: [
          { "Team number": "114", Number: 10, Number2: "4" },
          { "Team number": "114", Number: 20, Number2: "4" },
          { "Team number": "114", Number: 20, Number2: "4" },
        ],
      },
    }
    expect(calculateStatistics(mockData)).toEqual({
      "114": {
        ...mockData["114"],
        stats: {
          Number: {
            mean: mean([1, 2, 2]),
            standardDeviation: standardDeviation([1, 2, 2]),
          },
          Number2: {
            mean: mean([4, 4, 4]),
            standardDeviation: standardDeviation([4, 4, 4]),
          },
        },
      },
      "254": {
        ...mockData["254"],
        stats: {
          Number: {
            mean: mean([10, 20, 20]),
            standardDeviation: standardDeviation([10, 20, 20]),
          },
          Number2: {
            mean: mean([4, 4, 4]),
            standardDeviation: standardDeviation([4, 4, 4]),
          },
        },
      },
    })
  })
})
