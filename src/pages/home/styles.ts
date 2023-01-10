import { styled } from "../../styles"

export const GridContainer = styled("div", {
  maxWidth: "112rem",
  padding: "0 1.6rem",
  margin: "6rem auto",
  display: "grid",
  gridTemplateColumns: "25.6rem 45rem",
  alignItems: "flex-start",
  gap: "3.2rem",
  justifyContent: "center",

  "@media (max-width:768px)": {
    "&": {
      gridTemplateColumns: "1fr",
    },
  },
})