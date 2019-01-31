import React, { createContext, useState } from "react"
import { MatchData, TeamCollection } from "../utils/data-functions"

interface TeamState {
  matchData: MatchData[] | []
  teams: TeamCollection | {}
}
interface Props {
  children: React.ReactNode
}
export const TeamsContext = createContext<{
  state: TeamState
  changeState: (a: any) => void
}>({
  state: {
    matchData: [],
    teams: {},
  },
  changeState: () => {},
})
export default function(props: Props) {
  const [state, changeState] = useState<TeamState>({
    matchData: [{ "Team number": "114", "Number of Balls": 1 }],
    teams: {
      "114": {
        matchData: [
          { "Team number": "114", Number: 1, Number2: "4" },
          { "Team number": "114", Number: 2, Number2: "4" },
          { "Team number": "114", Number: 2, Number2: "4" },
        ],
        stats: {
          Number: {
            mean: 40,
            standardDeviation: 4,
          },
          Number2: {
            mean: 5,
            standardDeviation: 6,
          },
        },
      },
    },
  })
  return (
    <TeamsContext.Provider value={{ state, changeState }}>
      {props.children}
    </TeamsContext.Provider>
  )
}
