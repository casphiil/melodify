import {useState, useEffect, React} from 'react'
import axios from 'axios'

export function YoutubeAPI() {
  const [query, setQuery] = useState('')
  const [videoLink, setVideoLink] = useState(null)
  const [error, setError] = useState(null)

  const API_KEY = 'AIzaSyAH-3dBNsNjv0z-BSj6jwx37Mj422ggvVk' // Replace with your actual YouTube API key
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

  const handleSearch = async () => {
    setError(null)
    setVideoLink(null)

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: 1,
          key: API_KEY,
        },
      })

      const videos = response.data.items

      if (videos.length > 0) {
        const videoId = videos[0].id.videoId
        const link = `https://www.youtube.com/watch?v=${videoId}`
        setVideoLink(link)
      } else {
        setError('No videos found for the query.')
      }
    } catch (err) {
      setError('Failed to fetch data from YouTube API.')
      console.error(err)
    }
  }

  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h2>YouTube Search</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter search query"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      >
        Search
      </button>
      <div style={{marginTop: '20px'}}>
        {videoLink && (
          <div>
            <p>Video Link:</p>
            <a href={videoLink} target="_blank" rel="noopener noreferrer">
              {videoLink}
            </a>
          </div>
        )}
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </div>
  )
}
