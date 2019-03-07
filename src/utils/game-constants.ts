export const gameValues = {
  "Hatch Panel": 2,
  Cargo: 3,
  "Sandstorm Cross": {
    "level 1": 3,
    "level 2": 6,
  },
  "Habitat Return": {
    "level 1": 3,
    "level 2": 6,
    "level 3": 12,
  },
  Defending: 5,
  "Hab Docking": "1 RP",
  "Complete Rocket": "1 RP",
}
export type FieldType =
  | string
  | {
      "field-name": string
      type: "Switch" | "Number"
      [s: string]: string | string[] | boolean
      scoring: boolean
    }
  | {
      "field-name": string
      type: "Radio"
      options: string[]
      [s: string]: string | string[] | boolean
      scoring: boolean
    }
  | {
      "field-name": string
      type: "Slider"
      max: number
      step: number
      scoring: boolean
      marks: {
        [s: string]: string
      }
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
    {
      "field-name": "Event Code",
      type: "Radio",
      options: ["sfr", "svr", "practice"],
      scoring: false,
    },
    "Your Name",
    "Team Number",
    "Match Number",
    {
      "field-name": "Robot Starting Platform",
      type: "Radio",
      options: ["level 1", "level 2"],
      scoring: true,
    },
  ],
  Sandstorm: [
    { "field-name": "Leave Habitat", type: "Switch", scoring: true },
    {
      "field-name": "Number Hatch Panels U(Sandstorm)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Hatch Panels L(Sandstorm)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Hatch Panels dropped U(Sandstorm)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Hatch Panels dropped L(Sandstorm)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Cargo U(Sandstorm)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Cargo L(Sandstorm)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Cargo dropped U(Sandstorm)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Cargo dropped L(Sandstorm)",
      type: "Number",
      scoring: false,
    },
  ],
  Teleop: [
    {
      "field-name": "Number Hatch Panels U(Teleop)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Hatch Panels L(Teleop)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Hatch Panels dropped U(Teleop)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Hatch Panels dropped L(Teleop)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Cargo U(Teleop)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Cargo L(Teleop)",
      type: "Number",
      scoring: true,
    },
    {
      "field-name": "Number Cargo dropped U(Teleop)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number Cargo dropped L(Teleop)",
      type: "Number",
      scoring: false,
    },
    {
      "field-name": "Number of Fouls(Yellow Cards, Red Cards, ect)",
      type: "Number",
      scoring: false,
    },
  ],
  "End game": [
    {
      "field-name": "Habitat Return",
      type: "Radio",
      options: ["Did not return", "level 1", "level 2", "level 3"],
      scoring: true,
    },
    { "field-name": "Rocket Completion", type: "Switch", scoring: false },
    {
      "field-name": "Robot Deadtime(seconds)",
      type: "Slider",
      scoring: false,
      max: 20,
      step: 5,
      marks: {
        "0": "0",
        "5": "5",
        "10": "10",
        "15": "15",
        "20": "20 =<",
      },
    },
    {
      "field-name": "Driver Skill",
      type: "Slider",
      scoring: false,
      max: 4,
      step: 1,
      marks: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
      },
    },
    "Total Match Score Number",
    "Comments",
  ],
}
