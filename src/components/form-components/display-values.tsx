import React from "react"
const DisplayValues = ({ values }: { values: { [s: string]: string } }) => (
  <div
    css={{
      margin: "1rem 0",
      overflow: "scroll",
      fontSize: ".65rem",
      flexDirection: "column",
    }}
  >
    <tr>
      <th scope="col">Property</th>
      <th scope="col">Value</th>
    </tr>
    {Object.keys(values).map(k => (
      <tr key={k}>
        <td>{k}</td> <td>{values[k]}</td>
      </tr>
    ))}
  </div>
)
export default DisplayValues
