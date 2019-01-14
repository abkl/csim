import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import React from "react"
interface HeaderProps {
  siteTitle: string
}
const AppBar = ({ siteTitle }: HeaderProps) => (
  <div
    css={theme => css`
      padding: ${rhythm(1 / 5)};
      background-color: ${theme.primary.red};
    `}
  >
    <h1
      css={css`
        display: inline-block;
        font-style: normal;
        padding-left: ${rhythm(1)};
        text-decoration: none;
        margin-top: ${rhythm(1)};
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          background-image: none;
          text-shadow: none;
          color: white;
        `}
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default AppBar
