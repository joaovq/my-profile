'use client'
import { FaBars } from 'react-icons/fa'
import { Link } from '../../../navigation'
import styles from './header.module.scss'
import React, { useEffect, useState } from 'react'
import LogoIcon from '../logo/Logo'


const HeaderContent = ({ home, about, contactMe, children }: { home: string, about: string, contactMe: string, children: React.ReactNode }) => {
  const [active, setActive] = useState("home")
  const [displayMenu, setDisplay] = useState("flex")
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 734) {
        setDisplay('flex')
      } else {
        setDisplay('none')
      }
    })
  }, [])
  function handleClickMenu() {
    if (displayMenu == "flex") {
      setDisplay("none")
    } else {
      setDisplay("flex")
    }
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMainContainer}>
        <Link href='/' >
          <LogoIcon/>
        </Link>
        <nav className={styles.nav} style={{
          display: displayMenu
        }}>
          <div className={styles.navItems}>
            <Link href='/' className={active == "home" ? styles.active : undefined} onClick={() => setActive("home")}>
              {home}
            </Link>
            <Link href="/about" className={active == "about" ? styles.active : undefined} onClick={() => setActive("about")}>
              {about}
            </Link>
            <a href="#contact" className={active == "contact" ? styles.active : undefined} onClick={() => setActive("contact")}>
              {contactMe}
            </a>
          </div>
          {children}
        </nav>
        <div className={styles.menu} onClick={handleClickMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  )
}

export default HeaderContent