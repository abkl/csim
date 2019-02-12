import React from "react"
import ReactTable from "react-table"
const DisplayValues = ({ values }: { values: { [s: string]: string } }) => (
  <ReactTable
    data={Object.keys(values).map(key => ({
      property: key,
      value: values[key],
    }))}
    showPagination={false}
    css={{
      width: "100%",
      fontSize: ".65rem",
    }}
    columns={[
      {
        Header: "Field Names",
        accessor: "property",
        minWidth: 200,
        style: {
          overflow: "visible",
        },
      },
      {
        Header: "Values",
        accessor: "value",
        minWidth: 200,
      },
    ]}
  />
)
export default DisplayValues
