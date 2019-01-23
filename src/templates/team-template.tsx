import React from "react"

export interface TeamObject {
  team_number: number
  nickname: string
  city: string
  country: string
  state_prov: string
  address: string
}
export default ({
  pageContext: { team },
}: {
  pageContext: { team: TeamObject }
}) => (
  <div>
    <h1>
      Team {team.team_number}: {team.nickname}{" "}
    </h1>
  </div>
)
