import { fields } from "./game-constants"
// run using ts-node, use: ` ts-node -O '{"module": "commonjs"}' ./upload-fields.ts  `
const uploadFields = () =>
  Object.keys(fields)
    .map(key => fields[key])
    .reduce((acc, val) => acc.concat(val), [])
console.log(uploadFields())
