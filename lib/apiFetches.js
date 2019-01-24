const axios = require("axios")
exports.fetchTeamsFromTBA = async eventKey => {
  try {
    let teams = await axios
      .get(`https://www.thebluealliance.com/api/v3/event/${eventKey}/teams`, {
        headers: {
          "X-TBA-Auth-Key":
            "dN035xmkiTaxfsfyaKBMs7qlXImozqoe0Umw3WpjaPhoSz7S4Pm0hweEUjMoXGmT",
        },
      })
      .then(res => res.data)
    return teams
  } catch (err) {
    console.error(err)
    return
  }
}
