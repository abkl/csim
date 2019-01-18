import { Link } from "gatsby"
import styled from "@emotion/styled"

export default styled(Link)`
  color: ${props => props.theme.shadow.light};
  &:active {
    color: ${props => props.theme.shadow.dark};
  }
`
