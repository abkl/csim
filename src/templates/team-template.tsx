import React, { useContext } from "react"
import { TeamsContext } from "../contexts/teams-context"
/* eslint camelcase: "off" */
export interface TeamObject {
  team_number: number
  nickname: string
  city: string
  country: string
  state_prov: string
  address: string
  website: string
}
export default ({
  pageContext: { team },
}: {
  pageContext: { team: TeamObject }
}) => {
  const context = useContext(TeamsContext)
  return (
    <div>
      <h1>
        Team {team.team_number}: {team.nickname}{" "}
      </h1>
      <p>Basic Info:</p>
      <table>
        <tbody>
          <tr>
            <td>Country</td>
            <td>{team.country} </td>
          </tr>
          <tr>
            <td>City</td>
            <td>{team.city}</td>
          </tr>
          <tr>
            <td>State/province</td>
            <td>{team.state_prov}</td>
          </tr>
          <tr>
            <td>Team Website</td>
            <td>
              <a href={team.website} target="_blank">
                {team.website}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
