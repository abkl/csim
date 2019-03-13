import * as Yup from "yup"
import { Fields } from "../../utils/game-constants"
export const initiallizeFormState = (fields: Fields): { [s: string]: any } =>
  Object.keys(fields)
    .map(f => fields[f]) // map out the fields into [[fields]]
    .reduce((acc, val) => acc.concat(val), []) // flattens the array
    .reduce((state, field) => {
      if (typeof field === "object") {
        switch (field["type"]) {
          case "Number":
            return field.dropped
              ? {
                  ...state,
                  [field["field-name"]]: 0,
                  [field["field-name"] + " dropped"]: 0,
                }
              : {
                  ...state,
                  [field["field-name"]]: 0,
                }
          case "Radio":
            return {
              ...state,
              [field["field-name"]]: field["options"]
                ? field["options"][0]
                : "none-selected",
            }
          case "Switch":
            return {
              ...state,
              [field["field-name"]]: false,
            }
          case "Slider":
            return {
              ...state,
              [field["field-name"]]: 0,
            }
          default:
            return state
        }
      }
      if (typeof field === "string")
        return {
          ...state,
          [field]: "",
        }
      return state
    }, {}) // initializes the form state

export const createValidateObject = (fields: Fields) => {
  const shape = Object.keys(fields)
    .map(f => fields[f])
    .reduce((acc, val) => acc.concat(val), [])
    .reduce((vobj, field) => {
      if (typeof field === "object") {
        switch (field.type) {
          case "Number":
            return {
              ...vobj,
              [field["field-name"]]: Yup.number().min(0),
            }
          case "Radio":
            return {
              ...vobj,
              [field["field-name"]]: Yup.string().required(),
            }
          case "Switch":
            return {
              ...vobj,
              [field["field-name"]]: Yup.boolean().required(),
            }
        }
      }
      return {
        ...vobj,
        [field as string]: "",
      }
    }, {})
  return Yup.object().shape(shape)
}
