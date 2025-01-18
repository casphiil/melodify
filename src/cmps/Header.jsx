// import {robotService} from '../services/melody.service'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import SearchIcon from '../assets/svg/search-icon.svg?react'
import LogoIcon from '../assets/svg/logo-m.svg?react'
import {useEffect, useRef, useState} from 'react'

export function Header() {
  return (
    <section className="header">
      <LogoIcon className="logo-icon icon-empty" />
      <div className="main-search-wrapper">
        <HomeIcon className="home-icon icon-empty" />
        <div className="main-search-container">
          <div className="main-search-icon"></div>
          <div className="main-search">
            <span>
              <SearchIcon className="search-icon icon-empty" />
            </span>
            <input type="text"></input>
          </div>
        </div>
      </div>
      <div className="user-icon icon-empty"></div>
    </section>
  )
}
