'use client'
import React from 'react'
import Playlist from './playlist'
import styles from "./playlistSelect.module.scss"

export default function PlaylistSelect() {
    {/*Get Playlists (no tracks) */}
    function handleToggle(){
        console.log("Working")
        
    }
  return (<section className={styles.playlist_select}>
    <div className={styles.playlist_header}>
      <h2>Your Playlists </h2>
      {/* Make Color Change when max selection */}
      <p>Playlists Selected: 3 / 5</p>
    </div>
    <section className={styles.playlist_grid}>
      {/* Componennt for Playlist Grid Item */}
    </section>
 </section> )
}
