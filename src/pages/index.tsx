import React from "react"
import Button from "../components/button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Scouting Application for Team 4159"
      keywords={[`scouting`, `application`, `Team 4159`]}
    />
    <h1>Hello guys!</h1>
    <p>Welcolme to the 2019 Scouting Application</p>
    <Link to="/scouting-form">
      <Button>Scouting Form</Button>
    </Link>
  </Layout>
)

export default IndexPage
