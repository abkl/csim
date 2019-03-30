import {
  sheetsDataToJSON,
  collectMatchDataIntoTeamObj,
  getGameItemKeyFromMatchDataKey,
  calculateScore,
  ScoresObj,
} from "../lib/data-functions"
import { mean, standardDeviation } from "simple-statistics"
import { fields, gameValues } from "../src/utils/game-constants"
const fieldString = Object.keys(fields)
  .map(key => fields[key])
  .reduce((acc, val) => acc.concat(val), [])
  .map(fieldKey =>
    typeof fieldKey === "string" ? fieldKey : fieldKey["field-name"]
  )
describe("Turn Sheets Data into JSON", () => {
  test("sheetsDataToJSON should properly converts data from google sheets to JSON", () => {
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
  test("sheetsDataToJSON should throw an error when invalid data is passed to it", () => {
    const mockData = [["hello"]]
    expect(() => {
      sheetsDataToJSON(mockData)
    }).toThrowError(Error("invalid data passed!"))
  })
})
describe.only("properly calculate scores for individual matches", () => {
  test("getGameItemKeyFromMatchDataKey properly searches for the right key", () => {
    getGameItemKeyFromMatchDataKey(fieldString, "Cargo").forEach(key => {
      expect(RegExp("Cargo").test(key)).toBe(true)
      expect(/dropped/.test(key)).toBe(false)
    })
    getGameItemKeyFromMatchDataKey(fieldString, "Hatch Panel").forEach(key => {
      expect(RegExp("Hatch Panel").test(key)).toBe(true)
      expect(/dropped/.test(key)).toBe(false)
    })

    getGameItemKeyFromMatchDataKey(fieldString, "Hatch Panel", true).forEach(
      key => {
        expect(RegExp("Hatch Panel").test(key)).toBe(true)
        expect(/dropped/.test(key)).toBe(true)
      }
    )
    getGameItemKeyFromMatchDataKey(fieldString, "Hatch Panel", true).forEach(
      key => {
        expect(RegExp("Hatch Panel").test(key)).toBe(true)
        expect(/dropped/.test(key)).toBe(true)
      }
    )
  })
  test("calculateScore properly calculate score", () => {
    const mockData: ScoresObj = {
      "Robot Starting Platform": "level 1",
      "Leave Habitat": "FALSE",
      "Number of Hatch Panels(Sandstorm)": "0",
      "Number of Cargo(Sandstorm)": "0",
      "Number of Hatch Panels(Teleop)": "0",
      "Number of Cargo(Teleop)": "0",
      "Habitat Return": "Did not return",
      "Team Number": "1",
      "Match Number": "1",
      "Your Name": "t",
    }
    expect(calculateScore(mockData)).toEqual({
      Cargo: 0,
      "Hatch Panel": 0,
      "Habitat Return": 0,
      "Sandstorm Cross": 0,
      "Total Score": 0,
      "Team Number": "1",
      "Match Number": "1",
      "Scouter Name": "t",
    })
    const mockData2: ScoresObj = {
      "Robot Starting Platform": "level 1",
      "Leave Habitat": "TRUE",
      "Number of Hatch Panels(Sandstorm)": "1",
      "Number of Cargo(Sandstorm)": "4",
      "Number of Hatch Panels(Teleop)": "2",
      "Number of Cargo(Teleop)": "4",
      "Habitat Return": "level 3",
      "Team Number": "1",
      "Match Number": "1",
      "Your Name": "t",
    }
    expect(calculateScore(mockData2)).toEqual({
      "Team Number": "1",
      "Match Number": "1",
      Cargo: 8 * gameValues.Cargo,
      "Hatch Panel": 3 * gameValues["Hatch Panel"],
      "Habitat Return": gameValues["Habitat Return"]["level 3"],
      "Sandstorm Cross": gameValues["Sandstorm Cross"]["level 1"],
      "Total Score":
        8 * gameValues.Cargo +
        3 * gameValues["Hatch Panel"] +
        gameValues["Habitat Return"]["level 3"] +
        gameValues["Sandstorm Cross"]["level 1"],
      "Scouter Name": "t",
    })
    const mockData3: ScoresObj = {
      "Robot Starting Platform": "level 1",
      "Leave Habitat": "FALSE",
      "Number of Hatch Panels(Sandstorm)": "1",
      "Number of Cargo(Sandstorm)": "4",
      "Number of Hatch Panels(Teleop)": "2",
      "Number of Cargo(Teleop)": "4",
      "Habitat Return": "level 3",
      "Team Number": "1",
      "Match Number": "1",
      "Your Name": "t",
    }
    expect(calculateScore(mockData3)).toEqual({
      Cargo: 8 * gameValues.Cargo,
      "Hatch Panel": 3 * gameValues["Hatch Panel"],
      "Habitat Return": gameValues["Habitat Return"]["level 3"],
      "Sandstorm Cross": 0,
      "Total Score":
        8 * gameValues.Cargo +
        3 * gameValues["Hatch Panel"] +
        gameValues["Habitat Return"]["level 3"],
      "Team Number": "1",
      "Match Number": "1",
      "Scouter Name": "t",
    })
  })
  // test("collectMatchDataIntoTeamObj should collect matchData into respective teams and calculate scores for individual data points", () => {
  //   const d = collectMatchDataIntoTeamObj(data)
  //   Object.keys(d.teams).forEach(key => {
  //     d.teams[key].matchData.forEach(matchData =>
  //       expect(matchData["Team Number"].toString()).toEqual(key)
  //     )
  //   })
  //   expect(data.length).toEqual(d.originalScores.length)
  // })
})
describe("calculate mean and standard deviations", () => {})
