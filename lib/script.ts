/* eslint-disable @typescript-eslint/no-var-requires */
import { fetchDataFromSheets } from "./apiFetches"
import {
  sheetsDataToJSON,
  calculateScore,
  collectMatchDataIntoTeamObj,
  calculateTotalStats,
} from "./data-functions"
import { sampleStandardDeviation } from "simple-statistics"
import fs from "fs"
//  ts-node -O '{"module": "commonjs"}' ./script.ts
// fetchDataFromSheets()
//   .then(c => sheetsDataToJSON(c))
//   .then(c => collectMatchDataIntoTeamObj(c))
//   .then(c => fs.writeFileSync("./data.json", JSON.stringify(c)))
//   .then(c => console.log(c))

// fs.readFile("./data.json", (err, data) => {
//   if (err) console.error(err)
//   const teams = JSON.parse(data.toString())
// })
console.log(sampleStandardDeviation([6, 6, 6, 1, 2, 4, 8, 12]))
