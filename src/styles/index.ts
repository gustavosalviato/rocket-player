import { createStitches } from "@stitches/react"

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray100: "#E1E1E6",
      gray900: "#0F0D13",
      gray300: "#C4C4CC",
      gray400: "#7C7C8A",

      purple: "#2A2141",
    },
  },
})
