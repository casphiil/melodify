// import {robotService} from '../services/melody.service'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import SearchIcon from '../assets/svg/search-icon.svg?react'
import LogoIcon from '../assets/svg/logo-m.svg?react'
import BrowseIcon from '../assets/svg/browse.svg?react'
import {MainSearch} from '../cmps/MainSearch.jsx'
import {useEffect, useRef, useState} from 'react'

export function Header() {
  return (
    <section className="header">
      <LogoIcon className="logo-icon icon-empty" />
      <div className="search-and-home">
        <HomeIcon className="home-icon icon-empty" />
        <div className="main-search-wrapper">
          <MainSearch />
        </div>
      </div>
      <div className="user-icon icon-empty"></div>
    </section>
  )
}
