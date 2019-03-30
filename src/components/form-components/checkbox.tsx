import React from "react"
// TODO: Store checkbox data in csv and not array
const csvToArray = (str: string): string[] => str.split(",")
const arrayToCsv = (strA: string[]): string => strA.join(",")
export const updateValues = (checkboxValue: string, values: string): string => {
  const valuesArray = csvToArray(values)
  if (values === "") return checkboxValue
  if (valuesArray.includes(checkboxValue))
    return arrayToCsv(valuesArray.filter(v => v !== checkboxValue))
  return arrayToCsv(valuesArray.concat(checkboxValue))
}
export default function CheckboxGroup({
  name,
  options,
  onChange,
  value,
}: {
  name: string
  options: string[]
  onChange: (value: string) => void
  value: string
}) {
  return (
    <div
      css={{
        display: "inline-flex",
        alignItems: "flex-start",
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <label>{name}</label>
      <br />
      {options.map(option => (
        <label css={{ marginLeft: "10%" }}>
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={csvToArray(value).includes(option)}
            onChange={() => onChange(updateValues(option, value))}
          />
          {option}
          <br />
        </label>
      ))}
    </div>
  )
}
