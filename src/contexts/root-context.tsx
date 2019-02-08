import React, { createContext, useState } from "react"
import { MatchData, TeamCollection } from "../utils/data-functions"
import { data } from "../../lib/randomData"
export interface RootState {
  matchData: MatchData[] | []
  teams: TeamCollection
  pickList: number[]
}
interface Props {
  children: React.ReactNode
}
export const RootContext = createContext<{
  state: RootState
  changeState: (a: any) => void
}>({
  state: {
    matchData: [],
    pickList: [],
    teams: {},
  },
  changeState: () => {},
})
export default function(props: Props) {
  const [state, changeState] = useState<RootState>({
    matchData: [{ "Team number": "114", "Number of Balls": 1 }],
    teams: data,
    pickList: [],
  })
  return (
    <RootContext.Provider value={{ state, changeState }}>
      {props.children}
    </RootContext.Provider>
  )
}
