import React from 'react'
import styled from 'styled-components'
import ContactForm from './contactForm'

const Container = styled.section`
    padding: 0 6rem;
    .title {
        font-size: 36px;
    }
`

export const Contact = () => {
  return (
    <Container>
        <h1 className="title">Contact</h1>
        <ContactForm/>
    </Container>
  )
}