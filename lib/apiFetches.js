/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios")
exports.fetchTeamsFromTBA = async (eventKey, event) => {
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
