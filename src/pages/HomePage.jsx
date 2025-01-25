import {Header} from '../cmps/Header.jsx'
import {Player} from '../cmps/Player.jsx'
/* import DemoPlayer from '../cmps/DemoPlayer.jsx' */
import {MainSection} from '../cmps/MainSection.jsx'
import {Library} from '../cmps/Library.jsx'

export function HomePage() {
  return (
    <section className="home">
      <Header />
      <Library />
      <MainSection />
      <Player URL="https://youtu.be/b0bRw1faiws?si=kFh_7JBGVPvt0wEf" />
      {/* <DemoPlayer /> */}
    </section>
  )
}
