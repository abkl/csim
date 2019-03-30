import React from "react"
import { FieldProps } from "formik"
import styled from "@emotion/styled"

const GlobalContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`

const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  width: ${(props: { width: number; height: number }) => props.width}px;
  height: ${props => props.height}px;
  > input {
    display: none;
  }
`

const Input = styled.input`
  &:checked + span {
    background-color: ${props => props.theme.primary.red};
  }
  &:disabled + span {
    background-color: ${props => props.theme.primary.red};
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:disabled:checked + span {
    background-color: ${props => props.theme.primary.red};
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.highlight.light};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: relative;
    border-radius: 50%;
    content: "";
    height: ${(props: { sliderHeight: number; sliderWidth: number }) =>
      props.sliderHeight}px;
    width: ${props => props.sliderWidth}px;
    left: 4px;
    background-color: ${props => props.theme.shadow.light};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

export default function Switch(props: FieldProps) {
  return (
    <GlobalContainer>
      <label> {props.field.name}: &nbsp;</label>
      <InputContainer width={60} height={34}>
        <Input
          onChange={props.field.onChange}
          name={props.field.name}
          type="checkbox"
          value={props.field.value}
          checked={props.field.value}
        />
        <Slider sliderHeight={26} sliderWidth={26} />
      </InputContainer>
      <br />
    </GlobalContainer>
  )
}
