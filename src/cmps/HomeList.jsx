export function HomeList({tracks}) {
  return (
    <section className="home-list">
      {tracks.map(track => (
        <li key={track.id}>
          {/* <TrackPreview track={track} /> */}
          <section className="track-actions">
            <button onClick={() => onRemoveTrack(track.id)}>X</button>
            <Link style={{color: 'white'}} to={`/track/edit/${track.id}`}>
              Edit
            </Link>
          </section>
        </li>
      ))}
    </section>
  )
}
