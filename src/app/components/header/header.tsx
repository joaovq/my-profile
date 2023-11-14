import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMainContainer}>
        <h4>Joaovq</h4>
        <nav>
          <div className={styles.navItems}>
            <Link href='/'className='active'>HOME</Link>
            <Link href={`/about`}>ABOUT</Link>
            <Link href={`/`}>CONTACT ME</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header