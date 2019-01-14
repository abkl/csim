import React from "react"
import { css } from "@emotion/core"
import Form from "../components/form-components/form-template"
import { fields } from "../utils/game-constants"
export default () => (
  <>
    <h1
      css={css`
        text-align: center;
      `}
    >
      Scouting Form
    </h1>
    <Form fields={fields} />
  </>
)
