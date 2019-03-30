const fs = require("fs")

const JSONtoCSV = ({
  data = null,
  columnDelimiter = ",",
  lineDelimiter = "\n",
}) => {
  let result, ctr, keys

  if (data === null || !data.length) {
    return null
  }

  keys = Object.keys(data[0])

  result = ""
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  data.forEach(item => {
    ctr = 0
    keys.forEach(key => {
      if (ctr > 0) {
        result += columnDelimiter
      }

      result +=
        typeof item[key] === "string" && item[key].includes(columnDelimiter)
          ? `"${item[key]}"`
          : item[key]
      ctr++
    })
    result += lineDelimiter
  })

  return result
}
fs.readFile("./data.json", (err, data) => {
  if (err) console.error(err)
  const teams = JSON.parse(data.toString())
  fs.writeFileSync("./scores.csv", JSONtoCSV({ data: teams.originalScores }))
  console.log("hello world")
})
