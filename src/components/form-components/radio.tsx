import React from "react"
import css from "@emotion/css"
import { FieldProps } from "formik"
const Radio = (props: FieldProps & { options: string[] }) => (
  <fieldset
    css={css`
      display: inline-flex;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      border: 0;
      max-width: 300px;
      align-self: center;
    `}
  >
    <legend
      css={css`
        text-align: left;
      `}
    >
      {props.field.name}
    </legend>
    <div
      css={css`
        display: flex;
        margin: 8px 0;
        flex-direction: column;
      `}
    >
      {props.options.map(option => (
        <label
          css={css`
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
          `}
          key={option}
        >
          <span
            css={css`
              padding: 12px;
            `}
          >
            <input
              onChange={props.field.onChange}
              name={props.field.name}
              value={option}
              type="radio"
              checked={props.field.value === option}
            />
          </span>
          {option} <br />
        </label>
      ))}
    </div>
  </fieldset>
)
export default Radio
