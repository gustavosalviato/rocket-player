import { GridContainer } from "./styles"
import { AsideCard } from "../../components/AsideCard"
import { Card } from "../../components/Card"
import { songs } from "../../util/songs"
export function Home() {
  return (
    <GridContainer>
      <AsideCard
        title="Acorda Devinho"
        artist="Banda Rocketseat"
        currentTime="1:43"
        totalTime="2:42"
      />

      <div>
        {songs.map((song) => (
          <Card
            currentTime={song.currentTime}
            description={song.description}
            hasPlayer={song.hasPlayer}
            title={song.title}
            totalTime={song.totalTime}
            url={song.url}
          />
        ))}
      </div>
    </GridContainer>
  )
}
