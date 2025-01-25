import {useState, useEffect} from 'react'
import axios from 'axios'

const CLIENT_ID = '40b36a0c0fe94731aba1993dfc4455b1'
const CLIENT_SECRET = '9e6861fdc66b4101b15c64cbc604db1a'

const SpotifyAPI = () => {
  const [accessToken, setAccessToken] = useState('')
  const [tracks, setTracks] = useState([])
  const [currentPreview, setCurrentPreview] = useState(null) // To track the currently playing preview
  const [audio, setAudio] = useState(null) // Audio object for playback

  useEffect(() => {
    // Fetch access token when the component mounts
    const getAccessToken = async () => {
      const clientId = CLIENT_ID
      const clientSecret = CLIENT_SECRET
      const tokenUrl = 'https://accounts.spotify.com/api/token'
      const authOptions = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
      }

      const body = new URLSearchParams()
      body.append('grant_type', 'client_credentials')

      try {
        const response = await axios.post(tokenUrl, body, authOptions)
        setAccessToken(response.data.access_token)
      } catch (error) {
        console.error('Error fetching access token:', error)
      }
    }

    getAccessToken()
  }, [])

  const fetchTracks = async () => {
    if (!accessToken) return

    const apiUrl = 'https://api.spotify.com/v1/search?q=Imagine&type=track'
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    try {
      const response = await axios.get(apiUrl, options)
      const trackData = response.data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        preview: `https://open.spotify.com/track/6kLCHFM39wkFjOuyPGLGeQ`,
      }))

      setTracks(trackData)
    } catch (error) {
      console.error('Error fetching tracks:', error)
    }
  }

  const playPreview = previewUrl => {
    if (audio) {
      audio.pause() // Pause any currently playing audio
    }

    if (currentPreview === previewUrl) {
      setCurrentPreview(null) // Stop playing if the same preview is clicked again
    } else if (previewUrl) {
      const newAudio = new Audio(previewUrl)
      newAudio.play()
      setAudio(newAudio) // Set the new audio object
      setCurrentPreview(previewUrl) // Set the currently playing preview
    }
  }

  return (
    <div>
      <h1>Spotify API Example</h1>
      <button onClick={fetchTracks} disabled={!accessToken}>
        Fetch Tracks
      </button>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <h3>{track.name}</h3>
            <p>Id: {track.id}</p>
            <p>Artists: {track.artists}</p>
            <p>Album: {track.album}</p>
            <p>preview: {track.preview}</p>
            {track.preview ? (
              <button
                onClick={() => playPreview(track.preview)}
                style={{
                  backgroundColor: currentPreview === track.preview ? 'red' : '',
                }}
              >
                {currentPreview === track.preview ? 'Pause' : 'Play'}
              </button>
            ) : (
              <p>No preview available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpotifyAPI
