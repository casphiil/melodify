import {useState, useEffect} from 'react'

import SearchIcon from '../assets/svg/search-icon.svg?react'
import CollapseIcon from '../assets/svg/collapse-icon.svg?react'
import PlusIcon from '../assets/svg/plus-icon.svg?react'
import Arrow1Icon from '../assets/svg/arrow-icon-1.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'
import {SpotifyAPI} from './SpotifyAPI.jsx'
import {YoutubeAPI} from './YoutubeAPI.jsx'

export function Library() {
  const [term, setTerm] = useState('detective music')
  const [count, setCount] = useState(0)

  function handleClick(txt) {
    /* setTerm(txt) */
    console.log(txt)
  }

  /* setTerm('ambient detective music') */

  return (
    <section className="library">
      <div className="library-header">
        <div className="library-btns">
          <button className="collapse-wrapper">
            <CollapseIcon className="collapse-icon icon-empty" />
            <h4>Your Library</h4>
          </button>

          <button className="library-header-icons">
            <PlusIcon className="icon-empty" />
          </button>
          <button className="library-header-icons">
            <Arrow1Icon className="icon-empty" />
          </button>
        </div>
        <ul className="library-filter">
          <li>Playlist</li>
          <li>Artist</li>
          <li>Podcast&Show</li>
        </ul>
      </div>
      <div className="library-list-wrapper">
        <button onClick={() => setTerm('count + 1')}>
          <SearchIcon className="librarary-search-icon icon-empty" />
        </button>

        {/* <SpotifyAPI searchTerm={term} /> */}
      </div>
    </section>
  )
}
