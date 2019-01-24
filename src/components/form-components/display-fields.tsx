import React from "react"
import Counter from "./counter"
import { Field } from "formik"
import { FieldType } from "../../utils/game-constants"
import Radio from "./radio"
import css from "@emotion/css"

interface DisplayFieldsProps {
  fields: FieldType[]
  setFieldValue: (field: string, value: any) => void
  values: any
}
export default ({ fields, setFieldValue, values }: DisplayFieldsProps) => (
  <>
    {fields
      .filter(f => typeof f === "string")
      .map(f => (
        <div
          css={css`
            padding-bottom: 15px;
          `}
          key={f as string}
        >
          <Field name={f} placeholder={f} />
          <br />
        </div>
      ))}
    {fields
      .filter(f => typeof f === "object" && f.type === "Number")
      .map(f =>
        typeof f === "object" ? (
          <Counter
            value={values[f["field-name"]]}
            onChange={v => setFieldValue(f["field-name"] as string, v)}
            name={f["field-name"]}
            key={f["field-name"]}
          />
        ) : (
          ""
        )
      )}
    {fields
      .filter(f => typeof f === "object" && f.type === "Radio")
      .map(f =>
        typeof f === "object" ? (
          <Field
            component={Radio}
            name={f["field-name"]}
            options={f["options"] as string[]}
            key={f["field-name"]}
          />
        ) : (
          ""
        )
      )}
  </>
)
