import SearchIcon from '../assets/svg/search-icon.svg?react'
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
          <h2>Your Library</h2>
          <h2>+</h2>
          <h2>&#8594;</h2>
        </div>
        <ul className="library-filter">
          <li>Playlist</li>
          <li>Artist</li>
          <li>Podcast&Show</li>
        </ul>
      </div>
      <div className="library-list-wrapper">
        <span>
          <SearchIcon className="search-icon librarary-search-icon icon-empty" />
        </span>
        <ul className="library-list">
          {list.map(item => (
            <li key={`${item.name}''${list.indexOf(item)}`}>
              <ListItem />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
