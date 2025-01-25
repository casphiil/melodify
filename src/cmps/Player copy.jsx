import PlayIcon from '../assets/svg/player/play-icon.svg?react'
import PauseIcon from '../assets/svg/player/pause-icon.svg?react'
import NextIcon from '../assets/svg/player/next-icon.svg?react'
import PrevIcon from '../assets/svg/player/prev-icon.svg?react'
import ShuffleIcon from '../assets/svg/player/shuffle-icon.svg?react'
import LoopIcon from '../assets/svg/player/loop-icon.svg?react'
import VolumeIcon from '../assets/svg/player/volume-icon.svg?react'
import MuteIcon from '../assets/svg/player/mute-icon.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'
import {useState, useEffect, useRef, Component} from 'react'

import {version} from '../../package.json'
import ReactPlayer from 'react-player'
import {Duration} from '../services/duration.jsx'

export function Player({URL}) {
  const ref = useRef()
  const [playerAttr, setPlayerAttr] = useState({
    url: URL,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
  })
  const {url, pip, playing, controls, volume, muted, played, duration, playbackRate, loop, seeking} = playerAttr

  //handle functions

  const handlePlay = () => {
    setPlayerAttr(prevState => ({...prevState, playing: true}))
  }
  const handlePause = () => {
    setPlayerAttr(prevState => ({...prevState, playing: false}))
  }
  const handlePlayPause = () => {
    setPlayerAttr(prevState => ({...prevState, playing: !prevState.playing}))
  }

  const handleSeekMouseDown = () => {
    setPlayerAttr(prevState => ({...prevState, seeking: true}))
  }
  const handleSeekChange = e => {
    setPlayerAttr(prevState => ({...prevState, played: parseFloat(e.target.value)}))
  }

  const handleSeekMouseUp = e => {
    setPlayerAttr(prevState => ({...prevState, seeking: false}))
    ref.current.seekTo(parseFloat(e.target.value))
  }
  /*   const handleProgress = setPlayerAttr => {
    console.log('onProgress', playerAttr)
    if (seeking) {
      setPlayerAttr(prevState => ({...prevState, seeking: seeking}))
    }
  } */
  const handleProgress = progress => {
    if (!seeking) {
      console.log(progress)
      setPlayerAttr(prevState => ({...prevState, played: progress.played}))
    }
  }

  const handleToggleMuted = () => {
    setPlayerAttr(prevState => ({...prevState, muted: !prevState.muted}))
  }
  const handleVolumeChange = e => {
    setPlayerAttr(prevState => ({...prevState, volume: parseFloat(e.target.value)}))
  }
  const handleDuration = duration => {
    setPlayerAttr(prevState => ({...prevState, duration: duration}))
  }

  const handleOnPlaybackRateChange = speed => {
    setPlayerAttr(prevState => ({...prevState, playbackRate: parseFloat(speed)}))
  }
  const handleEnablePIP = () => {
    setPlayerAttr(prevState => ({...prevState, pip: true}))
  }
  const handleDisablePIP = () => {
    setPlayerAttr(prevState => ({...prevState, pip: false}))
  }
  const handleToggleLoop = () => {
    setPlayerAttr(prevState => ({...prevState, loop: !prevState.loop}))
  }
  const handleEnded = () => {
    setPlayerAttr(prevState => ({...prevState, playing: prevState.loop}))
  }

  return (
    <div className="app player">
      <section className="player">
        <ReactPlayer
          ref={ref}
          className="react-player"
          width="100%"
          height="100%"
          url={url}
          pip={pip}
          playing={playing}
          controls={controls}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onPlay={handlePlay}
          onDuration={handleDuration}
          onProgress={handleProgress}
          onPlaybackRateChange={handleOnPlaybackRateChange}
          onEnablePIP={handleEnablePIP}
          onDisablePIP={handleDisablePIP}
          onPause={handlePause}
          onEnded={handleEnded}
        />

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
            {/* <button onClick={handlePlayPause} className={playing ? 'paused' : 'playing'}>
              <PlayIcon className="play-btn" />
              <PauseIcon className="play-btn" />
            </button> */}
            <button onClick={handlePlayPause}>{playing ? <PauseIcon /> : <PlayIcon />}</button>
            <button>
              <NextIcon />
            </button>
            <button onClick={handleToggleLoop}>
              <LoopIcon className={loop ? 'loop-icon' : ''} />
            </button>
          </div>
          <div className="player-slider slider-wrapper">
            <span className="track-time">
              <Duration seconds={duration * played} />
            </span>
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              className="slider"
            ></input>
            <span className="track-time">
              <Duration seconds={duration * (1 - played)} />
            </span>
          </div>
        </div>
        <div className="volume-section">
          <button onClick={handleToggleMuted} className={muted ? 'muted' : ''}>
            {muted ? <MuteIcon /> : <VolumeIcon />}
          </button>
          <div className="volume-slider slider-wrapper">
            <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} className="slider"></input>
          </div>
        </div>
      </section>
    </div>
  )
}
