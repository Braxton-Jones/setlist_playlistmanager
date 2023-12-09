import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <section
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    className="landing-page"
  >
    <h3 initial={{ x: -100 }} animate={{ x: 0 }}>
      Your new way of creating playlists.
    </h3>

    <p>
    Feeling slowed down when trying to make playlists? Use .set("list") to make organizing your playlists easier!
    </p>

    <a
      className="sign-in_btn"
      href="/api/auth/signin"
    >
      Sign In
    </a>

    <div></div>
  </section>
  )
}
