import Image from 'next/image'
import Header from './ui/header'
import PlaylistManager from './ui/playlistManager'


export default function Home() {
  const username = "skyfall"

  return (
    <main>
      <Header/>
      <PlaylistManager/>
    </main>
  )
}
