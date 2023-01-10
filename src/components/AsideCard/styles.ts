import { styled } from "../../styles"
import PlayBackIcon from "../../assets/playback.svg"
import PlayIcon from "../../assets/play.svg"
import PlayFowardIcon from "../../assets/playfoward.svg"

export const GridContainer = styled("div", {
  maxWidth: "112rem",
  padding: "0 1.6rem",
  margin: "6rem auto",
  display: "grid",
  gridTemplateColumns: "25.6rem auto",
  alignItems: "flex-start",
  gap: "3.2rem",

  "@media (max-width:768px)": {
    "&": {
      gridTemplateColumns: "1fr",
      backgroundColor: "red",
    },
  },
})

export const CardPlayer = styled("aside", {
  backgroundColor: "$purple",
  padding: "3.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "8px",
})

export const ImageContainer = styled("div", {
  displa: "flex",
  width: "19rem",
  height: "19rem",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
})

export const InfoContainer = styled("div", {
  marginTop: "2.4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.8rem",

  strong: {
    fontWeight: 700,
    fontSize: "2.4rem",
  },

  span: {
    fontSize: "1.6rem",
    fontWeight: 400,
    color: "$gray400",
  },
})

export const Player = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "",

  marginTop: "3.2rem",
  padding: "0.8rem",
})

export const BaseButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  width: "2.8rem",
  height: "2.8rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  objectFit: "cover",
})

export const PlayBack = styled(BaseButton, {
  backgroundImage: `url(${PlayBackIcon})`,
})

export const Play = styled(BaseButton, {
  backgroundImage: `url(${PlayIcon})`,
})

export const PlayFoward = styled(BaseButton, {
  backgroundImage: `url(${PlayFowardIcon})`,
})

export const Indicator = styled("div", {
  width: "100%",
  height: "0.6rem",
  borderRadius: "8px",
  backgroundColor: "$gray100",
  marginTop: "2.8rem",
})

export const TimeContainer = styled("div", {
  marginTop: "0.8rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  span: {
    color: "$gray300",
    fontSize: "1.4rem",
  },
})
