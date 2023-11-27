"use client"
import Header from './components/header/header'
import styled from 'styled-components'
import Presentation from './home/components/presentation'
import MobileProjects from './home/components/mobileProjects'
import WebProjects from './home/components/webProjects'
import Footer from './components/footer/footer'
import { Contact } from './home/components/contact'
import ButtonScrollToTop from './components/buttonscrolltotop/scrooltotop'

const MainContainer = styled.main`
`
export default function Home() {
  return (
    <>
    <Header/>
    <MainContainer>
      <Presentation/>
      <MobileProjects/>
      <WebProjects/>
      <Contact/>
      <ButtonScrollToTop/>
      <Footer/>
    </MainContainer>
    </>
  )
}
