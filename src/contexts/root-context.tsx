import React, { createContext, useState } from "react"
import { MatchData, Teams } from "../../lib/data-functions"
import { data } from "../../lib/randomData"
export interface RootState {
  matchData: MatchData[] | []
  teams: Teams | {}
  pickList: number[]
}
interface Props {
  children: React.ReactNode
}
export const RootContext = createContext<{
  state: RootState
  changeState: (a: (b: RootState) => any) => void | any
}>({
  state: {
    matchData: [],
    pickList: [],
    teams: {},
  },
  changeState: () => {},
})
export default function RootContextContainer(props: Props) {
  const [state, changeState] = useState<RootState>({
    matchData: [],
    teams: {},
    pickList: [],
  })
  return (
    <RootContext.Provider value={{ state, changeState }}>
      {props.children}
    </RootContext.Provider>
  )
}
