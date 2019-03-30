/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios")
const fetchTeamsFromTBA = async (eventKey, event) => {
  try {
    let teams = await axios
      .get(`https://www.thebluealliance.com/api/v3/event/${eventKey}/teams`, {
        headers: {
          "X-TBA-Auth-Key":
            "dN035xmkiTaxfsfyaKBMs7qlXImozqoe0Umw3WpjaPhoSz7S4Pm0hweEUjMoXGmT",
        },
      })
      .then(res => res.data)
      .then(data =>
        data.map(t => ({
          ...t,
          competition: event,
        }))
      )
    return teams
  } catch (err) {
    console.error(err)
  }
}
fetchTeamsFromTBA("2019casj").then(teams => teams.map(t => console.log(t.team_number + " " + t.nickname)))
exports.fetchTeamsFromTBA = fetchTeamsFromTBA
/* GET https://sheets.googleapis.com/v4/spreadsheets/[SPREADSHEETID]/values/[RANGE]?key=[YOUR_API_KEY] HTTP/1.1 */

exports.fetchDataFromSheets = async () => {
  try {
    const spreadsheetid = "141SgP1Cjn_40LeReGRav2M0dSUk0g6YPJDrP8Bgn-7c"
    const range = "A:AC"
    let data = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetid}/values/${range}?key=AIzaSyAukpHDfLv6_IAWzjFJnyjHtcA1dDJqZiU`
    )
    return data.data.values
  } catch (err) {
    console.error(err)
  }
}
