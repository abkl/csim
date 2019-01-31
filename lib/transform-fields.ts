import { fields } from "../src/utils/game-constants"
// run using ts-node, use: ` ts-node -O '{"module": "commonjs"}' ./upload-fields.ts  `
const transfromFields = Object.keys(fields)
  .map(key => fields[key])
  .reduce((acc, val) => acc.concat(val), [])
  .map(fieldKey =>
    typeof fieldKey === "string" ? fieldKey : fieldKey["field-name"]
  )
  .reduce(
    (p, c) => `${p}
   ${c}`,
    ""
  )
console.log(transfromFields)
