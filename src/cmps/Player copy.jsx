import PlayIcon from '../assets/svg/player/play-icon.svg?react'
import PauseIcon from '../assets/svg/player/pause-icon.svg?react'
import NextIcon from '../assets/svg/player/next-icon.svg?react'
import PrevIcon from '../assets/svg/player/prev-icon.svg?react'
import ShuffleIcon from '../assets/svg/player/shuffle-icon.svg?react'
import ReplayIcon from '../assets/svg/player/replay-icon.svg?react'
import VolumeIcon from '../assets/svg/player/volume-icon.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react'

export function Player() {
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [crntTime, setCrntTime] = useState(0)
  function onPlay() {
    if (!play) setPlay(true)
    else setPlay(false)
    /* console.log(crntTime) */
  }

  const playBtn = play ? 'paused' : 'playing'

  return (
    <section className="player">
      <div className="track-section">
        <ListItem />
      </div>
      <div className="player-section">
        <div className="player-btns">
          <button>
            <ShuffleIcon />
          </button>
          <button>
            <PrevIcon />
          </button>
          <button className={playBtn} onClick={onPlay}>
            <PlayIcon className="play-btn" />
            <PauseIcon className="play-btn" />
          </button>
          <button>
            <NextIcon />
          </button>
          <button>
            <ReplayIcon />
          </button>
        </div>
        <div className="player-slider slider-wrapper">
          <input type="range" className="slider"></input>
        </div>
      </div>
      <div className="volume-section">
        <button>
          <VolumeIcon />
        </button>
        <div className="volume-slider slider-wrapper">
          <input type="range" className="slider"></input>
        </div>
      </div>

      <ReactPlayer
        /* ref={this.ref} */
        volume={0.2}
        value={1500}
        muted={false}
        playing={play}
        className="react-player"
        /* url="https://www.youtube.com/watch?v=ugTluz9d3eg&ab_channel=MedievalDream" */
        url="https://youtu.be/cJs0hmPR3dc?si=qnP2OSNRjX6mJJV_"
        /* url="https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb" */
        width="100%"
        height="400px"
      />
    </section>
  )
}
