'use client'
import { Link } from '../../../navigation'
import styles from './header.module.scss'
import React, { useState } from 'react'

const HeaderContent = ({home, about, contactMe, children}: { home: string, about: string, contactMe: string, children: React.ReactNode}) => {
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
        {children}
      </div>
    </header>
  )
}

export default HeaderContent