
import PlaylistSelect from "./playlistSelect"
import Editor from "./editor"
import styles from "./playlistManager.module.scss"

export default function PlaylistManager() {
  return (
  <section className={styles.app_wrapper}>
    <PlaylistSelect/>
    <Editor/>
  </section>
  )
}
