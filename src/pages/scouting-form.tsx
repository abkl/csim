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
    <Form
      storageKey="match-scouting"
      fields={fields}
      submitUrl={
        "https://script.google.com/macros/s/AKfycbxd9o5VOvlJT4SqTeJTAoUmT9WNxmagGafiTARnFCyU7bgPlcnR/exec"
      }
    />
  </>
)
export default ScoutingFormPage
