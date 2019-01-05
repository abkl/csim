import React from "react"
import Button from "../button"
interface CounterProps {
  onChange: (v: any) => void
  name: string
  value: string
}
export default ({ name, value, onChange }: CounterProps) => (
  <div>
    <label>{name}</label>
    <Button
      type="button"
      onClick={() =>
        parseInt(value) >= 0 ? onChange(parseInt(value) + 1) : ""
      }
    >
      +
    </Button>
    <label>{value}</label>
    <Button
      type="button"
      onClick={() => (parseInt(value) ? onChange(parseInt(value) - 1) : "")}
    >
      -
    </Button>
  </div>
)
