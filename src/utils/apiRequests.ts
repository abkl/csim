import axios from "axios"

export const fetchTeamsFromTBA = async (eventKey: string) => {
  try {
    let res = await axios.get(
      `https://www.thebluealliance.com/api/v3/event/${eventKey}/teams/simple`,
      {
        headers: {
          "X-TBA-Auth-Key":
            "dN035xmkiTaxfsfyaKBMs7qlXImozqoe0Umw3WpjaPhoSz7S4Pm0hweEUjMoXGmT",
        },
      }
    )
    return res
  } catch (err) {
    console.error(err)
  }
}
