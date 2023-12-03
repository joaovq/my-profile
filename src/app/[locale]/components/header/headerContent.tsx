'use client'
import Link from 'next/link'
import styles from './header.module.scss'
import { useState } from 'react'

const HeaderContent = ({home, about, contactMe}: { home: string, about: string, contactMe: string}) => {
  const [active, setActive] = useState("home")
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMainContainer}>
        <Link href='/' >
          <h4>Joaovq</h4>
        </Link>
        <nav>
          <div className={styles.navItems}>
            <Link href='/' className={active == "home" ? styles.active : undefined} onClick={() => setActive("home")}>
              {home}
            </Link>
            <Link href="/about" className={active == "about" ? styles.active : undefined} onClick={() => setActive("about")}>
              {about}
            </Link>
            <Link href={`/`} className={active == "contact" ? styles.active : undefined} onClick={() => setActive("contact")}>
              {contactMe}
            </Link>
          </div>
        </nav>
        <div className={styles.selectLanguage}>
          {/* <select name="language" id={`app-language`} title='languages'>
            <option value="en">{english}</option>
            <option value="pt-BR">{portuguese}</option>
          </select> */}
           <button>EN</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderContent