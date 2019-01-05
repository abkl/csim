import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import React from "react"
interface HeaderProps {
  siteTitle: string
}
const Header = ({ siteTitle }: HeaderProps) => (
  <div
    css={css`
      background: linear-gradient(90deg, #d26ac2, #46c9e5);
      margin-bottom: 1.45rem;
      padding: ${rhythm(1)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <h1
      css={css`
        display: inline-block;
        font-style: normal;
        padding-left: ${rhythm(1)};
      `}
    >
      <Link
        to="/"
        css={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
