// import {robotService} from '../services/melody.service'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import SearchIcon from '../assets/svg/search-icon.svg?react'
import LogoIcon from '../assets/svg/logo-m.svg?react'
import BrowseIcon from '../assets/svg/browse.svg?react'
import {useEffect, useRef, useState} from 'react'

export function MainSearch() {
  return (
    <section className="main-search">
      <span>
        <SearchIcon className="search-icon icon-empty" />
      </span>
      <input type="text"></input>
      <span>
        <BrowseIcon className="browse-icon icon-empty" />
      </span>
    </section>
  )
}
