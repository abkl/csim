import React from "react"
import { VictoryPie, VictoryTheme } from "victory"
import styled from "@emotion/styled"

const OuterDiv = styled.div`
  max-width: 500px;
  max-height: 500px;
  margin: auto;
`

export default function PieChart() {
  return (
    <OuterDiv>
      <VictoryPie
        theme={VictoryTheme.material}
        colorScale="warm"
        data={[
          { x: "Platform", y: 35 },
          { x: "Balls", y: 40 },
          { x: "Rings", y: 55 },
        ]}
        labels={d => `${d.x} 
          amount: ${d.y}`}
        style={{
          labels: {
            fontSize: 5,
            fill: "#fff",
          },
        }}
        radius={50}
        width={100}
        height={100}
        labelRadius={20}
      />
    </OuterDiv>
  )
}
