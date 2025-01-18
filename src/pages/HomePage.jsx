import {Header} from '../cmps/Header'
import {Player} from '../cmps/Player'
import {MainSection} from '../cmps/MainSection'
import {Library} from '../cmps/Library'

export function HomePage() {
  return (
    <section className="home">
      <Header />
      <Library />
      <MainSection />
      <Player />
    </section>
  )
}
