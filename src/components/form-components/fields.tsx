import React from "react"
import Counter from "./counter"
import { Field, FieldProps } from "formik"
import { FieldType } from "../../utils/game-constants"
import css from "@emotion/css"

interface DisplayFieldsProps {
  fields: FieldType[]
  setFieldValue: (field: string, value: any) => void
  values: any
}
export const DisplayFields = ({
  fields,
  setFieldValue,
  values,
}: DisplayFieldsProps) => (
  <>
    {fields
      .filter(f => typeof f === "string")
      .map(f => (
        <div
          css={css`
            padding-bottom: 15px;
          `}
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
            component={DisplayRadio}
            name={f["field-name"]}
            options={f!["options"]}
            key={f["field-name"]}
          />
        ) : (
          ""
        )
      )}
  </>
)
export const DisplayRadio = (props: FieldProps & { options: string[] }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      align-self: center;
    `}
  >
    <label
      css={css`
        align-self: flex-start;
      `}
    >
      {props.field.name}
    </label>
    <br />
    {props.options.map(option => (
      <div key={option}>
        <input
          onChange={props.field.onChange}
          name={props.field.name}
          value={option}
          type="radio"
          checked={props.field.value === option}
        />
        {option} <br />
      </div>
    ))}
  </div>
)
