import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Image from "../components/image"
import { graphql } from "gatsby"
const PageHeader = styled.h1`
  text-align: center;
`
const SubText = styled.p`
  text-align: center;
  font-style: italic;
`
const IndexPage = ({ data }: { data: any }) => {
  /*  const teams = data.allSitePage.edges
    .filter((node: any) => /teams/.test(node.node.id))
    .map((node: any) => node.node.id.match(/\d+/g))
    .filter((a: any) => a !== null && a.length > 0)
    .map((a: any) => a[0]) */
  return (
    <>
      <SEO
        title="Home"
        description="Scouting Application for Team 4159"
        keywords={[`scouting`, `application`, `Team 4159`]}
      />
      <Image />
      <PageHeader>Cardinal Scout Imporved(CSIM)</PageHeader>
      <SubText>Welcolme to the 2019 Scouting Application</SubText>
    </>
  )
}
// const a = exampleQuery.data.allSitePage.edges.filter(node => /teams/.test(node.node.id)).map(node => node.node.id.match(/\d+/g)).filter(a => a !== null && a.length > 0).map(a => a[0])
export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default IndexPage
