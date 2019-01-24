import React from "react"
import { TeamObject } from "./team-template"
import Link from "../components/primatives/link"
export default ({
  pageContext: { teams },
}: {
  pageContext: {
    teams: {
      sfr: TeamObject[]
      svr: TeamObject[]
    }
  }
}) => (
  <div>
    <h1>Teams</h1>
    <h2> SVR</h2>
    {teams["svr"].map(team => (
      <React.Fragment key={team.team_number}>
        <Link to={`teams/${team.team_number.toString()}`}>
          {team.team_number}
        </Link>
        <br />
      </React.Fragment>
    ))}
    <h2>SFR</h2>
    {teams["sfr"].map(team => (
      <React.Fragment key={team.team_number}>
        <Link to={`teams/${team.team_number.toString()}`}>
          {team.team_number}
        </Link>
        <br />
      </React.Fragment>
    ))}
  </div>
)
