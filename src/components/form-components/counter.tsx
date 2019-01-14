import React from "react"
import Button from "../button"
import css from "@emotion/css"
interface CounterProps {
  onChange: (v: any) => void
  name: string
  value: string
}
export default ({ name, value, onChange }: CounterProps) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      borderWidth: "5px",
      paddingBottom: "5%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <label>{name}</label>
    <br />
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 50%;
        max-width: 160px;
      `}
    >
      <Button
        type="button"
        onClick={() => (parseInt(value) ? onChange(parseInt(value) - 1) : "")}
      >
        -
      </Button>

      <label css={{ textAlign: "center", alignSelf: "center" }}>{value}</label>
      <Button
        type="button"
        onClick={() =>
          parseInt(value) >= 0 ? onChange(parseInt(value) + 1) : ""
        }
      >
        +
      </Button>
    </div>
  </div>
)
