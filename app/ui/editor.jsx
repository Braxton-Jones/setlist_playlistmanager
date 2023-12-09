import styles from "./editor.module.scss"
export default function Editor() {
    const userSavedTracks = [
        {name: "hey", key: "1"},{name: "hi", key: "2"}
      ]
    const selectedPlaylistsTracks = [
        // array of all tracks from each playlist
        {name: "hey", key: "1"},{name: "hi", key: "2"}
      ]

      const aggregateSavedTracks = (userSavedTracks, selectedPlaylistsTracks) =>{
        /*
        Functionality:
          Every song from selectedPlaylistTracks is mapped against savedTracks
         */ 
        const savedTracks= []        
        return savedTracks
      }
  return (
    <section className={styles.editor}>
      <div className={styles.editor_header}>
        <h2>Your Song Library</h2>
        <div className={styles.selected_playlists}>
          <p>Selected Playlists:</p>
          {/* Components for the small icons  */}
        </div>
      </div>
      <div className={styles.editor_filters}>
        <input placeholder="search?"/>
        <p>{`Name ( A -> Z )`}</p>
        <p>Date Added ( Ascending )</p>
      </div>
      <div className={styles.editor_grid}>
        {/* Component for grid items */}
      </div>
      

    </section>
  )
}
