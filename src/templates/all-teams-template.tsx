import React, { useContext } from "react"
import { TeamObject } from "./team-template"
import Link from "../components/primatives/link"
import ReactTable from "react-table"
import foldableTable from "react-table/lib/hoc/foldableTable"
import "react-table/react-table.css"
import { RootContext } from "../contexts/root-context"
const FTBL = foldableTable<TeamObject>(ReactTable)
export default ({
  pageContext: { teams },
}: {
  pageContext: {
    teams: TeamObject[]
  }
}) => {
  const { state } = useContext(RootContext)
  return (
    <div>
      <h1>Teams</h1>
      <em>yes there are duplicates</em>
      <br />
      <FTBL
        filterable
        data={teams}
        showPageSizeOptions={false}
        pageSize={20}
        columns={[
          {
            Header: "Information",
            foldable: true,
            columns: [
              {
                Header: "Team Number",
                accessor: "team_number",
                Cell: (props: { value: string }) => (
                  <Link to={`/teams/${props.value}`}>{props.value}</Link>
                ),
              },
              {
                Header: "Nickname",
                accessor: "nickname",
              },
              {
                Header: "Competition",
                accessor: "competition",
                filterAll: true,
                filterMethod: (filter: { value: string }, row: TeamObject[]) =>
                  !filter.value || filter.value === "all"
                    ? row
                    : row.filter(team => team.competition === filter.value),
                Filter: ({
                  filter,
                  onChange,
                }: {
                  filter: { value: string }
                  onChange: (a: any) => void
                }) => (
                  <select
                    onChange={event => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                  >
                    <option value="all">all</option>
                    <option value="sfr">SFR</option>
                    <option value="svr">SVR</option>
                  </select>
                ),
              },
            ],
          },
          {
            Header: "stats",
            foldable: true,
            columns: [
              {
                Header: "Mean Rings",
                id: "mean rings",
                accessor: d =>
                  state.teams[d.team_number].stats["Number of Rings"]
                    ? state.teams[d.team_number].stats["Number of Rings"].mean
                    : 0,
              },
              {
                Header: "Mean Balls",
                id: "mean balls",
                accessor: d =>
                  state.teams[d.team_number].stats["Number of Balls"]
                    ? state.teams[d.team_number].stats["Number of Balls"].mean
                    : 0,
              },
              {
                Header: "Mean % Score Contrib",
                id: "mean score",
                accessor: d =>
                  state.teams[d.team_number].stats["% Contrib to Team"]
                    ? state.teams[d.team_number].stats["% Contrib to Team"].mean
                    : 0,
              },
            ],
          },
        ]}
      />
    </div>
  )
}
