import {Header} from '../cmps/Header.jsx'
import {Player} from '../cmps/Player.jsx'
import {MainSection} from '../cmps/MainSection.jsx'
import {Library} from '../cmps/Library.jsx'
/* import {DemoPlayer} from '../cmps/DemoPlayer.jsx' */

export function HomePage() {
  return (
    <section className="home">
      <Header />
      <Library />
      <MainSection />
      <Player URL="https://youtu.be/Dck1ajndYdc?si=7Be0AbZqk39TKzgs" />
    </section>
  )
}
