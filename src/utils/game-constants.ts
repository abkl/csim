export const gameValues = {
  "Hatch Panel": 2,
  Cargo: 3,
  "Sandstorm Cross": {
    Level: 6,
    "Non Level": 3,
  },
  "Sandstorm Climb": {
    "Level 1": 3,
    "Level 2": 6,
    "Level 3": 12,
  },
  Defending: 5,
  "Hab Docking": "1 RP",
  "Complete Rocket": "1 RP",
}
export type FieldType =
  | string
  | {
      "field-name": string
      type: "Radio" | "Switch" | "Number"
      options?: string[]
    }
export interface Fields {
  "Pre-game": FieldType[]
  Sandstorm: FieldType[]
  Teleop: FieldType[]
  "End game": FieldType[]
  [s: string]: FieldType[]
}
export const fields: Fields = {
  "Pre-game": [
    "Your Name",
    {
      "field-name": "Event Code",
      type: "Radio",
      options: ["sfr", "???"],
    },
    "Match Number",
    {
      "field-name": "Robot Starting Platform",
      type: "Radio",
      options: ["level", "non-level"],
    },
  ],
  Sandstorm: [
    { "field-name": "Cross during Sandstorm", type: "Switch" },
    { "field-name": "Number of Hatch Panels(Sandstorm)", type: "Number" },
    { "field-name": "Number of Cargo(Sandstorm)", type: "Number" },
    {
      "field-name": "Number of Hatch Panels dropped(Sandstorm)",
      type: "Number",
    },
    { "field-name": "Number of Cargo dropped(Sandstorm)", type: "Number" },
  ],
  Teleop: [
    { "field-name": "Number of Hatch Panels(Teleop)", type: "Number" },
    { "field-name": "Number of Cargo(Teleop)", type: "Number" },
    { "field-name": "Number of Hatch Panels dropped(Teleop)", type: "Number" },
    { "field-name": "Number of Cargo dropped(Teleop)", type: "Number" },
  ],
  "End game": [
    "Habitat Return",
    "Rocket Completion",
    "Robot Deadtime",
    "Comments",
  ],
}
