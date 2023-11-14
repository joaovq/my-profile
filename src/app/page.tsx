"use client"
import Header from './components/header/header'
import styled from 'styled-components'
import Presentation from './home/components/presentation'
import MobileProjects from './home/components/mobileProjects'

const MainContainer = styled.main`
`
export default function Home() {
  return (
    <>
    <Header/>
    <MainContainer>
      <Presentation/>
      <MobileProjects/>
    </MainContainer>
    </>
  )
}
