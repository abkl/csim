import * as Yup from "yup"
export const initiallizeFormState = (
  fields: string[]
): { [s: string]: string } =>
  fields.reduce((state, field) => {
    if (/^Number/.test(field)) {
      return {
        ...state,
        [field]: "0",
      }
    } else {
      return {
        ...state,
        [field]: "",
      }
    }
  }, {})

export const createValidateObject = (fields: string[]) => {
  const shape = fields.reduce(
    (vobj, field) =>
      /^Number/.test(field)
        ? {
            ...vobj,
            [field]: Yup.number().min(0, "Number can't be negative"),
            "Robot Deadtime": Yup.string().required(
              "Please select one of the options"
            ),
            "Scouter Name": Yup.string().required("Please Enter Your Name"),
            comments: Yup.string(),
          }
        : {
            ...vobj,
            [field]: Yup.string(),
            "Robot Deadtime": Yup.string().required(
              "Please select one of the options"
            ),
            "Scouter Name": Yup.string().required("Please Enter Your Name"),
            comments: Yup.string(),
          },
    {}
  )
  return Yup.object().shape(shape)
}
