import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: ${props => props.theme.shadow.light};
  &:active {
    color: ${props => props.theme.shadow.dark};
  }
`
export default StyledLink
