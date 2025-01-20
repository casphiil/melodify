import SearchIcon from '../assets/svg/search-icon.svg?react'
import CollapseIcon from '../assets/svg/collapse-icon.svg?react'
import PlusIcon from '../assets/svg/plus-icon.svg?react'
import Arrow1Icon from '../assets/svg/arrow-icon-1.svg?react'
import {ListItem} from '../cmps/ListItem.jsx'

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
