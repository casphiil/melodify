import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/main.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
/* import {store} from '../src/store/store.js' */

import {HomePage} from './pages/HomePage.jsx'
import {Search} from './pages/Search.jsx'
import {Genere} from './pages/Genere.jsx'
import {Playlist} from './pages/Playlist.jsx'
import {Track} from './pages/Track.jsx'

/* import {store} from './store/store.js' */
import {Provider} from 'react-redux'

export default function App() {
  return (
    <>
      {
        <Router>
          <section className="app">
            {/* <AppHeader /> */}
            <main className="main-layout">
              <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<Search />} path="/search" />
                <Route element={<Genere />} path="/genere" />
                <Route element={<Playlist />} path="/playlist" />
                <Route element={<Track />} path="/track" />
              </Routes>
            </main>
            {/* <AppFooter /> */}
          </section>
        </Router>
      }
    </>
  )
}
