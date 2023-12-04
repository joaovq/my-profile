'use client'
import React from 'react'
import styled from 'styled-components'

const Container =  styled.footer`
    background: #1E1E1E;
    display: flex;
    justify-content: center;
    padding: 20px;
    span {
        color: white;
    }
`

const Footer = () => {
  return (
    <>
        <Container>
            <span>@Copyright 2023</span>
        </Container>
    </>
  )
}

export default Footer
