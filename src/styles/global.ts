import { globalCss } from "."

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  html: {
    fontSize: "62.5%",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body,input, textarea, button": {
    fontWeight: "400",
    fontFamily: "Roboto",
  },

  button: {
    cursor: "pointer",
  },
})
