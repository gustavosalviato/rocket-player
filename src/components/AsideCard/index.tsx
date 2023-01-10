import {
  CardPlayer,
  ImageContainer,
  InfoContainer,
  Player,
  PlayBack,
  TimeContainer,
  PlayFoward,
  Indicator,
  Play,
} from "./styles"
import ImagePreview from "../../assets/preview.png"

export interface AsideCardProps {
  title: string
  artist: string
  currentTime: string
  totalTime: string
}

export function AsideCard({
  title,
  artist,
  currentTime,
  totalTime,
}: AsideCardProps) {
  return (
    <CardPlayer>
      <ImageContainer>
        <img src={ImagePreview} alt="" />
      </ImageContainer>
      <InfoContainer>
        <strong>{title}</strong>
        <span>{artist}</span>
      </InfoContainer>

      <Player>
        <PlayBack />
        <Play />
        <PlayFoward />
      </Player>
      <Indicator />

      <TimeContainer>
        <span>{currentTime}</span>
        <span>{totalTime}</span>
      </TimeContainer>
    </CardPlayer>
  )
}
