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

      purple: "#2A2141",
    },
  },
})
