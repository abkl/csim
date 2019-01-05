import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Form from "../components/form-components/form-template"
import { fields } from "../utils/game-values"
export default () => (
  <Layout>
    <h1>Scouting Form</h1>
    <Form fields={fields} />
  </Layout>
)
