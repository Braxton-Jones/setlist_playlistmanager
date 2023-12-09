import Link from 'next/link'
import styles from './header.module.scss'
export default function Header() {

  return (
    <section className={styles.header}>
        <div className={styles.logo}>.setlist - spotify playlist manager</div>
        <div className={styles.icons_wrapper}>
          <div className={styles.icon}>
            <Link href="#"></Link>
          </div>
          <div className={styles.icon}>
            <Link href="#"></Link>
          </div>
          <div className={styles.icon}>
            
          </div>
        </div>
    </section>
  )
}
