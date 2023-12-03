import React from 'react'
import styled from 'styled-components'
import ContactForm from './contactForm'

const Container = styled.section`
    padding: 0 2rem;
    .title {
        font-size: 36px;
    }
    @media (min-width: 500px) {
        padding: 0 6rem;
    }
`

export const Contact = () => {
  return (
    <Container id='contact'>
        <h1 className="title">Contact</h1>
        <ContactForm/>
    </Container>
  )
}