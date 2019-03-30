import React from "react"
import Counter from "./counter"
import { Field } from "formik"
import { FieldType } from "../../utils/game-constants"
import Radio from "./radio"
import Switch from "./switch"
import CheckboxGroup from "./checkbox"
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
                component={
                  f === "Comments" || f === "Recent problems with robot"
                    ? "textarea"
                    : "input"
                }
                type={/Number/.test(f) ? "number" : "text"}
                name={f}
                placeholder={f}
              />
              <br />
            </div>
          )
        if (typeof f === "object") {
          switch (f.type) {
            case "Number":
              return (
                <Counter
                  values={values}
                  setFieldValue={setFieldValue}
                  name={f["field-name"]}
                  key={f["field-name"]}
                  dropped={f.dropped}
                />
              )
            case "Switch":
              return (
                <Field
                  component={Switch}
                  name={f["field-name"]}
                  key={f["field-name"]}
                />
              )
            case "Radio":
              return (
                <Field
                  component={Radio}
                  name={f["field-name"]}
                  options={f["options"] as string[]}
                  key={f["field-name"]}
                />
              )
            case "Slider":
              return (
                <FormSlider
                  value={values[f["field-name"]]}
                  onChange={v => setFieldValue(f["field-name"] as string, v)}
                  name={f["field-name"]}
                  max={f.max}
                  min={f.min}
                  step={f.step}
                  marks={f.marks}
                  key={f["field-name"]}
                />
              )
            case "Checkbox":
              return (
                <CheckboxGroup
                  name={f["field-name"]}
                  options={f.options}
                  onChange={v => setFieldValue(f["field-name"], v)}
                  value={values[f["field-name"]]}
                  key={f["field-name"]}
                />
              )
          }
        }
      })}
    </>
  )
}
