'use client'
import { FaBars } from 'react-icons/fa'
import styles from './header.module.scss'
import React, { useEffect, useState } from 'react'
import LogoIcon from '../logo/Logo'
import NavigationLink from '../navigationlink/NavigationLink'
import styled from 'styled-components'

const NavContainer = styled.nav<{ display: string }>`
  display: ${props => props.display};
  transition: all 300ms ease-in-out;
`



const HeaderContent = ({ home, about, contactMe, children }: { home: string, about: string, contactMe: string, children: React.ReactNode }) => {
  const [displayMenu, setDisplay] = useState<string>("flex")
  useEffect(() => {
    eventResize()
    window.addEventListener('resize', eventResize)

    function eventResize() {
      if (window.innerWidth > 734) {
        setDisplay('flex')
      } else {
        setDisplay('none')
      }
    }
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
          <LogoIcon />
        </NavigationLink>
        <NavContainer className={styles.nav} display={displayMenu}>
          <div className={styles.navItems}>
            <NavigationLink href='/'>
              {home}
            </NavigationLink>
            <NavigationLink href="/about">
              {about}
            </NavigationLink>
            <NavigationLink href={{ pathname: "/contact" }}>
              {contactMe}
            </NavigationLink>
          </div>
          {children}
        </NavContainer>
        <div className={styles.menu} onClick={handleClickMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  )
}

export default HeaderContent