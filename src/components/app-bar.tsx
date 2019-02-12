import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import React from "react"
import styled from "@emotion/styled"
interface HeaderProps {
  siteTitle: string
}
const LinkP = styled.p`
  display: inline-block;
  align-self: flex-end;
  font-style: normal;
  padding-right: ${rhythm(0.3)};
  text-decoration: none;
  margin-top: ${rhythm(1)};
`
const LinkH1 = styled.h1`
  display: inline-block;
  font-style: normal;
  padding-left: ${rhythm(1)};
  text-decoration: none;
  margin-top: ${rhythm(1)};
`
const StyledLink = styled(Link)`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  color: white;
`
const HeaderLinks = ({ children, to }: { children: string; to: string }) => (
  <LinkP>
    <StyledLink to={to}>{children}</StyledLink>
  </LinkP>
)

const AppBar = ({ siteTitle }: HeaderProps) => (
  <div
    css={theme => css`
      padding: ${rhythm(1 / 5)};
      background-color: ${theme.primary.red};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
  >
    <LinkH1>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </LinkH1>
    <div
      css={css`
        align-self: flex-end;
      `}
    >
      <HeaderLinks to="/scouting-form"> Scouting Form </HeaderLinks>
      <HeaderLinks to="/teams"> Teams </HeaderLinks>
      <HeaderLinks to="/picklist"> Pick List</HeaderLinks>
    </div>
  </div>
)

export default AppBar
