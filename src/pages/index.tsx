import React, { useState, useEffect } from "react"
import Button from "../components/primatives/button"
import styled from "@emotion/styled"
import Link from "../components/primatives/link"
import SEO from "../components/seo"
import posed from "react-pose"
const Box = styled(
  posed.div({
    visible: {
      y: 0,
    },
    hidden: {
      y: 100,
    },
  })
)`
  width: 100px;
  height: 100px;
  background: #ff1c68;
  transform-origin: 50% 50%;
  border-radius: 100%;
`
const AnimatedBox = () => {
  const [state, changeState] = useState({ isVisible: true })

  return (
    <div>
      <Box pose={state.isVisible ? "visible" : "hidden"} />
      <Button
        onClick={() => changeState({ ...state, isVisible: !state.isVisible })}
      >
        Click to animate
      </Button>
    </div>
  )
}
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
    <AnimatedBox />
  </>
)

export default IndexPage
