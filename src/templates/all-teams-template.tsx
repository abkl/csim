import React, { useContext } from "react"
import { TeamObject } from "./team-template"
import Link from "../components/primatives/link"
import ReactTable from "react-table"
import foldableTable from "react-table/lib/hoc/foldableTable"
import "react-table/react-table.css"
import { RootContext, RootState } from "../contexts/root-context"
import Button from "../components/primatives/button"
const FTBL = foldableTable<TeamObject>(ReactTable)
export default function AllTeamsTemplate({
  pageContext: { teams },
}: {
  pageContext: {
    teams: TeamObject[]
  }
}) {
  const { state, changeState } = useContext(RootContext)
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
                Header: "Add to Picklist",
                accessor: "team_number",
                Cell(props: { value: string }) {
                  return (
                    <>
                      {!state.pickList.includes(parseInt(props.value)) ? (
                        <>
                          <Button
                            onClick={() =>
                              changeState((s: RootState) => ({
                                ...s,
                                pickList: [...s.pickList, props.value],
                              }))
                            }
                            css={{ marginRight: "1%" }}
                          >
                            + to Picklist
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() =>
                            changeState(
                              (s: RootState): RootState => ({
                                ...s,
                                pickList: s.pickList.filter(
                                  t => t !== parseInt(props.value)
                                ),
                              })
                            )
                          }
                        >
                          - from Picklist
                        </Button>
                      )}
                    </>
                  )
                },
                minWidth: 117,
              },
              {
                Header: "Team Number",
                accessor: "team_number",
                Cell(props: { value: string }) {
                  return <Link to={`/teams/${props.value}`}>{props.value}</Link>
                },
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
                Filter({
                  filter,
                  onChange,
                }: {
                  filter: { value: string }
                  onChange: (a: any) => void
                }) {
                  return (
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">all</option>
                      <option value="sfr">SFR</option>
                      <option value="svr">SVR</option>
                    </select>
                  )
                },
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
