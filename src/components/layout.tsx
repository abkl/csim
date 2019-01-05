import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import AppBar from "./app-bar"

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <AppBar siteTitle={data.site.siteMetadata.title} />
        <div
          css={css`
            margin: 0 auto;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          {children}
        </div>
      </>
    )}
  />
)
interface LayoutProps {
  children: React.ReactNode
}
export default Layout
