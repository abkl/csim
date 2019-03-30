import React, { useContext } from "react"
import { RootContext, RootState } from "../contexts/root-context"
import Button from "../components/primatives/button"
import PieChart from "../components/charts/piechart"
import ReactTable from "react-table"
import { navigate } from "gatsby"
/* eslint camelcase: "off" */
export interface TeamObject {
  team_number: number
  nickname: string
  city: string
  country: string
  state_prov: string
  address: string
  website: string
  competition: string
}
const TeamTemplate = ({
  pageContext: { team },
}: {
  pageContext: { team: TeamObject }
}) => {
  const { state, changeState } = useContext(RootContext)
  const stats = state.teams[team.team_number].stats
  return (
    <div>
      <h1>
        Team {team.team_number}: {team.nickname}
      </h1>
      <em>Team Website: </em>
      <a href={team.website} target="_blank">
        {team.website}
      </a>
      <br />
      {!state.pickList.includes(team.team_number) ? (
        <>
          <Button
            onClick={() =>
              changeState((s: RootState) => ({
                ...s,
                pickList: [...s.pickList, team.team_number],
              }))
            }
            css={{ marginRight: "1%" }}
          >
            + Team to Picklist
          </Button>
          <Button onClick={() => navigate("picklist")}>Go to Picklist</Button>
        </>
      ) : (
        <Button
          onClick={() =>
            changeState(
              (s: RootState): RootState => ({
                ...s,
                pickList: s.pickList.filter(t => t !== team.team_number),
              })
            )
          }
        >
          - Team to Picklist
        </Button>
      )}
      <div css={{ textAlign: "center", marginTop: "5%" }}>
        <h1> Stats Summary Table </h1>
        <ReactTable
          data={
            stats
              ? Object.keys(stats).map(key => ({ label: key, ...stats[key] }))
              : []
          }
          pageSize={10}
          showPagination={false}
          columns={[
            {
              Header: "Stat",
              accessor: "label",
            },
            {
              Header: "Mean",
              accessor: "mean",
            },
            {
              Header: "Standard Deviation",
              accessor: "standardDeviation",
            },
          ]}
        />
        <h1> Charts </h1>
        <h2>Point Composition Breakdown</h2>
        <PieChart />
      </div>
    </div>
  )
}
export default TeamTemplate
