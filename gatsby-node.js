/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")
const path = require("path")
let fetchTeamsFromTBA = async eventKey => {
  try {
    let teams = await axios
      .get(
        `https://www.thebluealliance.com/api/v3/event/${eventKey}/teams/simple`,
        {
          headers: {
            "X-TBA-Auth-Key":
              "dN035xmkiTaxfsfyaKBMs7qlXImozqoe0Umw3WpjaPhoSz7S4Pm0hweEUjMoXGmT",
          },
        }
      )
      .then(res => res.data)
    return teams
  } catch (err) {
    console.error(err)
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const teams = await fetchTeamsFromTBA("2019casf")
    const AllTeamsTemplate = path.resolve(
      "src/templates/all-teams-template.tsx"
    )
    const TeamTemplate = path.resolve("src/templates/team-template.tsx")
    createPage({
      path: `/teams`,
      component: AllTeamsTemplate,
      context: { teams },
    })
    teams.forEach(team => {
      createPage({
        path: `/teams/${team.team_number}`,
        component: TeamTemplate,
        context: { team },
      })
    })
  } catch (error) {
    console.error(error)
  }
}
