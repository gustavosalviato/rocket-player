import {
  CardPlayer,
  Header,
  ImageContainer,
  Indicator,
  InfoContainer,
  Play,
  PlayBack,
  Player,
  PlayFoward,
  TimeContainer,
} from "./styles"

interface CardProps {
  url: string
  title: string
  description: string
  currentTime: string
  totalTime: string
  hasPlayer: boolean
}

export function Card({
  currentTime,
  description,
  title,
  totalTime,
  url,
  hasPlayer = true,
}: CardProps) {
  return (
    <CardPlayer>
      <Header>
        <ImageContainer>
          <img src={url} alt="" />
        </ImageContainer>

        <InfoContainer>
          <strong>{title}</strong>
          <span>{description}</span>
        </InfoContainer>
      </Header>

      <Player>
        <PlayBack />
        <Play />
        <PlayFoward />
      </Player>
      {hasPlayer && <Indicator />}

      <TimeContainer>
        <span>{currentTime}</span>
        <span>{totalTime}</span>
      </TimeContainer>
    </CardPlayer>
  )
}
