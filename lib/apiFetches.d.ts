export interface TeamObject {
  team_number: number
  nickname: string
  city: string
  country: string
  state_prov: string
  address: string
  website: string
}
export function fetchTeamsFromTBA(eventKey: string): Promise<TeamObject[]>
