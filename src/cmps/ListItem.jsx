// import {robotService} from '../services/melody.service'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import {useEffect, useRef, useState} from 'react'

const list = [
  {name: 'first artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'second artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'third artist name', title: 'first title', subtitle: 'first subtitle'},
]

export function ListItem({name = 'name', subtitle = 'subtitle', imgUrl = ''}) {
  return (
    <section className="list-item">
      <div className="list-item-img">
        <img src={imgUrl}></img>
      </div>
      <span>
        <p className="item-title ">{name}</p>
        <p className="item-subtitle ">{subtitle}</p>
      </span>
    </section>
  )
}
