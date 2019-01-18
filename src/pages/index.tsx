import React from "react"
import Button from "../components/primatives/button"
import Link from "../components/primatives/link"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Scouting Application for Team 4159"
      keywords={[`scouting`, `application`, `Team 4159`]}
    />
    <h1>Hello guys!</h1>
    <p>Welcolme to the 2019 Scouting Application</p>
    <Link to="/scouting-form">Scouting Form</Link>
    <Link to="/teams"> Teams </Link>
  </>
)

export default IndexPage
