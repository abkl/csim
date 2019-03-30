import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
const DisplayValues = ({ values }: { values: { [s: string]: string } }) => (
  <ReactTable
    data={Object.keys(values).map(key => ({
      property: key,
      value: values[key],
    }))}
    defaultPageSize={10}
    showPagination
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
        Cell(props: { value: string }) {
          return <div>{props.value.toString()}</div>
        },
      },
    ]}
  />
)
export default DisplayValues
