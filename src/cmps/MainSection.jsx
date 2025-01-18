import ReactPlayer from 'react-player'
import {useState} from 'react'
import SpotifyAPI from './SpotifyAPI.jsx'

export function MainSection() {
  return (
    <section className="main-section">
      <h1>MainSection</h1>
      <SpotifyAPI />
    </section>
  )
}
