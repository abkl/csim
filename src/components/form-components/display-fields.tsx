import React from "react"
import Counter from "./counter"
import { Field } from "formik"
import { FieldType } from "../../utils/game-constants"
import Radio from "./radio"
import Switch from "./switch"
import css from "@emotion/css"
import FormSlider from "./slider"

interface DisplayFieldsProps {
  fields: FieldType[]
  setFieldValue: (field: string, value: any) => void
  values: any
}
export default function DisplayFields({
  fields,
  setFieldValue,
  values,
}: DisplayFieldsProps) {
  return (
    <>
      {fields.map(f => {
        if (typeof f === "string")
          return (
            <div
              css={css`
                padding-bottom: 15px;
              `}
              key={f as string}
            >
              <Field
                component={f === "Comments" ? "textarea" : "input"}
                type={/Number/.test(f) ? "number" : "text"}
                name={f}
                placeholder={f}
              />
              <br />
            </div>
          )
        if (typeof f === "object" && f.type === "Number")
          return (
            <Counter
              values={values}
              setFieldValue={setFieldValue}
              name={f["field-name"]}
              key={f["field-name"]}
              dropped={f.dropped}
            />
          )
        if (typeof f === "object" && f.type === "Switch")
          return (
            <Field
              component={Switch}
              name={f["field-name"]}
              key={f["field-name"]}
            />
          )
        if (typeof f === "object" && f.type === "Radio")
          return (
            <Field
              component={Radio}
              name={f["field-name"]}
              options={f["options"] as string[]}
              key={f["field-name"]}
            />
          )
        if (typeof f === "object" && f.type === "Slider")
          return (
            <FormSlider
              value={values[f["field-name"]]}
              onChange={v => setFieldValue(f["field-name"] as string, v)}
              name={f["field-name"]}
              max={f.max}
              step={f.step}
              marks={f.marks}
              key={f["field-name"]}
            />
          )
      })}
    </>
  )
}
