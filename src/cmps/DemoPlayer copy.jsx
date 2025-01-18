import PlayIcon from '../assets/svg/player/play-icon.svg?react'
import PauseIcon from '../assets/svg/player/pause-icon.svg?react'
import NextIcon from '../assets/svg/player/next-icon.svg?react'
import PrevIcon from '../assets/svg/player/prev-icon.svg?react'
import ShuffleIcon from '../assets/svg/player/shuffle-icon.svg?react'
import ReplayIcon from '../assets/svg/player/replay-icon.svg?react'
import VolumeIcon from '../assets/svg/player/volume-icon.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'
import {useState, useEffect} from 'react'

import {React, Component} from 'react'
import {version} from '../../package.json'
import ReactPlayer from 'react-player'
import {Duration} from '../services/duration.jsx'

class DemoPlayer extends Component {
  state = {
    url: 'https://youtu.be/cJs0hmPR3dc?si=qnP2OSNRjX6mJJV_',
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    })
  }

  handlePlayPause = () => {
    this.setState({playing: !this.state.playing})
  }

  handleStop = () => {
    this.setState({url: null, playing: false})
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    )
  }

  handleToggleLight = () => {
    this.setState({light: !this.state.light})
  }

  handleToggleLoop = () => {
    this.setState({loop: !this.state.loop})
  }

  handleVolumeChange = e => {
    this.setState({volume: parseFloat(e.target.value)})
  }

  handleToggleMuted = () => {
    this.setState({muted: !this.state.muted})
  }

  handleSetPlaybackRate = e => {
    this.setState({playbackRate: parseFloat(e.target.value)})
  }

  handleOnPlaybackRateChange = speed => {
    this.setState({playbackRate: parseFloat(speed)})
  }

  handleTogglePIP = () => {
    this.setState({pip: !this.state.pip})
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({playing: true})
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({pip: true})
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({pip: false})
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({playing: false})
  }

  handleSeekMouseDown = e => {
    this.setState({seeking: true})
  }

  handleSeekChange = e => {
    this.setState({played: parseFloat(e.target.value)})
  }

  handleSeekMouseUp = e => {
    this.setState({seeking: false})
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({playing: this.state.loop})
  }

  handleDuration = duration => {
    console.log('onDuration', duration)
    this.setState({duration})
  }

  handleClickFullscreen = () => {
    /* screenfull.request(document.querySelector('.react-player')) */
  }

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>
  }

  ref = player => {
    this.player = player
  }

  render() {
    const {url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip} = this.state
    const SEPARATOR = ' · '

    return (
      <div className="app player">
        <section className="player">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log('onBuffer')}
            onPlaybackRateChange={this.handleOnPlaybackRateChange}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
            onPlaybackQualityChange={e => console.log('onPlaybackQualityChange', e)}
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
              <button onClick={this.handlePlayPause} className={playing ? 'paused' : 'playing'}>
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
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={played}
                onMouseDown={this.handleSeekMouseDown}
                onChange={this.handleSeekChange}
                onMouseUp={this.handleSeekMouseUp}
                className="slider"
              ></input>
            </div>
          </div>
          <div className="volume-section">
            <button onClick={this.handleToggleMuted} className={muted ? 'muted' : ''}>
              <VolumeIcon className="volume-icon" />
            </button>
            <div className="volume-slider slider-wrapper">
              <input type="range" min={0} max={1} step="any" value={volume} onChange={this.handleVolumeChange} className="slider"></input>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default DemoPlayer
