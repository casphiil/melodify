import PlayIcon from '../assets/svg/player/play-icon.svg?react'
import NextIcon from '../assets/svg/player/next-icon.svg?react'
import PrevIcon from '../assets/svg/player/prev-icon.svg?react'
import ShuffleIcon from '../assets/svg/player/shuffle-icon.svg?react'
import ReplayIcon from '../assets/svg/player/replay-icon.svg?react'
import VolumeIcon from '../assets/svg/player/volume-icon.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'
import ReactPlayer from 'react-player'
import {useState} from 'react'

export function Player() {
  const [play, setPlay] = useState(false)
  function onPlay() {
    if (!play) setPlay(true)
    else setPlay(false)
  }
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
          <button onClick={onPlay}>
            <PlayIcon />
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
        volume={0.01}
        muted={false}
        playing={play}
        className="react-player"
        /* url="https://soundcloud.com/woodcampmusic/eatin-good" */
        url="https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
        width="100%"
        height="400px"
      />
    </section>
  )
}
