import { useState } from 'react'
import './App.css'
import './SongList.jsx'
import SongList from './SongList.jsx'


function App() {
  const data = [
    {title: "song 1", artist: "joe smith", album: "album 1", duration: "3:15"},
    {title: "song 2", artist: "joe smith", album: "album 1", duration: "3:00"},
    {title: "song 3", artist: "joe smith", album: "album 1", duration: "3:00"},
    {title: "song 1", artist: "joe smith", album: "album 1", duration: "3:15"},
    {title: "song 2", artist: "joe smith", album: "album 1", duration: "3:00"},
    {title: "song 3", artist: "joe smith", album: "album 1", duration: "3:00"}
  ]

  let songSelected = false;

  return (
    <>
      <div>
        <h1 className="title">Spotify Music Visualization</h1>
        <input type="text" placeholder="Look for a song" className="song_name_field"/>
        <button type="button" className="search_button">Search</button>
        <div className="song-list-containter" style={{ display: songSelected ? "none" : "block" }}>
          <SongList songs={data}/>
        </div>
      </div>
    </>
  )
}

export default App
