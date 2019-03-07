import React from "react"
import { css } from "@emotion/core"
import Form from "../components/form-components/form-template"
import { fields } from "../utils/game-constants"
const ScoutingFormPage = () => (
  <>
    <h1
      css={css`
        text-align: center;
      `}
    >
      Scouting Form
    </h1>
    <p
      css={css`
        font-style: italic;
        text-align: center;
      `}
    >
      U means upper, L means lower
    </p>
    <Form fields={fields} />
  </>
)
export default ScoutingFormPage
