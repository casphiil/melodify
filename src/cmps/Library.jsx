import SearchIcon from '../assets/svg/search-icon.svg?react'
import CollapseIcon from '../assets/svg/collapse-icon.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'

const CLIENT_ID = '40b36a0c0fe94731aba1993dfc4455b1'
const CIENT_SECRET = '9e6861fdc66b4101b15c64cbc604db1a'

const list = [
  {name: 'first artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'second artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'third artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'first artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'second artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'third artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'first artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'second artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'third artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'first artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'second artist name', title: 'first title', subtitle: 'first subtitle'},
  {name: 'third artist name', title: 'first title', subtitle: 'first subtitle'},
]
export function Library() {
  /* const listHtml='';
  function loadList() {
    return list.map(item => {
      ;<ListItem />
    })
  }
  loadList() */
  return (
    <section className="library">
      <div className="library-header">
        <div className="library-btns">
          <button className="collapse-wrapper">
            <CollapseIcon className="collapse-icon icon-empty" />
            <h4>Your Library</h4>
          </button>
          <span>+</span>
          <span>&#8594;</span>
        </div>
        <ul className="library-filter">
          <li>Playlist</li>
          <li>Artist</li>
          <li>Podcast&Show</li>
        </ul>
      </div>
      <div className="library-list-wrapper">
        <span>
          <SearchIcon className="librarary-search-icon icon-empty" />
        </span>
        <ul className="library-list">
          {list.map(item => (
            <li key={`${item.name}''${list.indexOf(item)}`}>
              <ListItem name={item.name} subtitle={item.subtitle} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
