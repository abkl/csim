import { TeamObject } from "../src/templates/team-template"
export function fetchTeamsFromTBA(
  eventKey: string,
  event: string
): Promise<TeamObject[]>
export function fetchDataFromSheets(): Promise<any[][]>
