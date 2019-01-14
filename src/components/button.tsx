import styled from "@emotion/styled"

interface ButtonProps {
  primary: boolean
}
const Button = styled.button`
  min-width: 2rem;
  padding: 6px 16px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
  border: 2px solid ${props => props.theme.primary.red};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  text-decoration: none;
  background: none;
  color: #c41e3a;
  &:active {
    background-color: ${props => props.theme.primary.red};
    color: white;
  }
`

export default Button
