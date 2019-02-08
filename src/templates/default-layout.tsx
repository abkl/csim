import React from "react"
import RootContext from "../contexts/root-context"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import AppBar from "../components/app-bar"

const Layout = ({ children }: LayoutProps) => {
  return (
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
      render={data => {
        return (
          <ThemeProvider theme={theme}>
            <RootContext>
              <AppBar siteTitle={data.site.siteMetadata.title} />
              <div
                css={css`
                  padding: ${rhythm(2)};
                  padding-top: ${rhythm(1.5)};
                `}
              >
                {children}
              </div>
            </RootContext>
          </ThemeProvider>
        )
      }}
    />
  )
}
interface LayoutProps {
  children: React.ReactNode
}
export default Layout
