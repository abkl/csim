import Typography, { TypographyOptions } from "typography"
//@ts-ignore
import oceanBeachTheme from "typography-theme-ocean-beach"
;(oceanBeachTheme as TypographyOptions).overrideThemeStyles = (_, options) => ({
  "h1,h2,h3,h4,h5": {
    marginTop: 0,
  },
})
const typography = new Typography(oceanBeachTheme)

export default typography
export const rhythm = typography.rhythm
