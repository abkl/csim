import React from "react"
import { TeamObject } from "./team-template"
import Link from "../components/primatives/link"
export default ({
  pageContext: { teams },
}: {
  pageContext: { teams: TeamObject[] }
}) => (
  <div>
    <h1>Teams</h1>
    {teams.map(team => (
      <>
        <Link to={`teams/${team.team_number.toString()}`}>
          {team.team_number}
        </Link>
        <br />
      </>
    ))}
  </div>
)
