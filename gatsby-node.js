/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { fetchTeamsFromTBA } = require("./lib/apiFetches")
const { uniq } = require("ramda")
const path = require("path")
exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const sfrTeams = await fetchTeamsFromTBA("2019casf")
    const svrTeams = await fetchTeamsFromTBA("2019casj")
    const AllTeamsTemplate = path.resolve(
      "src/templates/all-teams-template.tsx"
    )
    const TeamTemplate = path.resolve("src/templates/team-template.tsx")
    createPage({
      path: `/teams`,
      component: AllTeamsTemplate,
      context: { teams: { sfr: sfrTeams, svr: svrTeams } },
    })
    uniq(sfrTeams.concat(svrTeams)).forEach(team => {
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
