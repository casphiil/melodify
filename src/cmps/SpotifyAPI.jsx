import {useState, useEffect} from 'react'
import {ListItem} from '../cmps/ListItem.jsx'
import axios from 'axios'
import {YoutubeAPI} from './YoutubeAPI.jsx'

const CLIENT_ID = '40b36a0c0fe94731aba1993dfc4455b1'
const CLIENT_SECRET = '9e6861fdc66b4101b15c64cbc604db1a'

export function SpotifyAPI({searchTerm}) {
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState('')

  // Spotify credentials
  const clientId = CLIENT_ID
  const clientSecret = CLIENT_SECRET

  // Function to search Spotify
  const searchSpotify = async () => {
    try {
      // Step 1: Get an access token
      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // Base64 encode client ID and secret
        },
        body: 'grant_type=client_credentials',
      })

      const tokenData = await tokenResponse.json()
      const accessToken = tokenData.access_token

      // Step 2: Use the access token to query the Spotify API
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=10`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      const data = await response.json()
      setSearchResults(data.tracks.items) // Update the state with the track results
    } catch (error) {
      console.error('Error fetching Spotify data:', error)
    }
  }
  console.log('search: ', searchTerm)
  /*   searchSpotify(searchTerm) */
  /* console.log(searchResults[0]) */

  return (
    <div>
      {/* <h1>Spotify Search</h1>
      <input type="text" placeholder="Search for a track..." value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={() => searchSpotify(query)}>Search</button> */}
      <ul className="library-list">
        {searchResults.map(track => (
          <li key={track.id}>
            <ListItem name={track.name} subtitle={track.artists[0].name} imgUrl={track.album.images[0].url} />
          </li>
        ))}
      </ul>
    </div>
  )
}
