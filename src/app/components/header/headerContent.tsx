'use client'
import { FaBars } from 'react-icons/fa'
import styles from './header.module.scss'
import React, { useEffect, useState } from 'react'
import LogoIcon from '../logo/Logo'
import NavigationLink from '../navigationlink/NavigationLink'


const HeaderContent = ({ home, about, contactMe, children }: { home: string, about: string, contactMe: string, children: React.ReactNode }) => {
  const [displayMenu, setDisplay] = useState<string>("flex")
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
        <NavigationLink href='/' >
          <LogoIcon/>
        </NavigationLink>
        <nav className={styles.nav} style={{
          display: displayMenu
        }}>
          <div className={styles.navItems}>
            <NavigationLink href='/'>
              {home}
            </NavigationLink>
            <NavigationLink href="/about">
              {about}
            </NavigationLink>
            <NavigationLink href={{pathname: "/contact"}}>
              {contactMe}
            </NavigationLink>
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