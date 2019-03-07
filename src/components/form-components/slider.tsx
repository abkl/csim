import React from "react"
import Slider, { createSliderWithTooltip } from "rc-slider"
import theme from "../../utils/theme"

interface FormSliderProps {
  onChange: (v: any) => void
  name: string
  value: string
  max: number
  step: number
  marks: {
    [s: string]: string
  }
}
const SliderWithToolTip = createSliderWithTooltip(Slider)
export default function FormSlider({
  onChange,
  name,
  value,
  max,
  step,
  marks,
}: FormSliderProps) {
  return (
    <div
      css={{
        paddingBottom: "30px",
      }}
    >
      <label>{name}</label>
      <SliderWithToolTip
        trackStyle={{ backgroundColor: theme.primary.red }}
        handleStyle={{ borderColor: theme.primary.red }}
        dots
        onChange={onChange}
        value={parseInt(value)}
        css={{ margin: "auto", width: "50%" }}
        max={max}
        marks={marks}
        step={step}
      />
    </div>
  )
}
