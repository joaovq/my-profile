'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaAngleUp } from "react-icons/fa"

const Container = styled.div`
    border-radius: 50%;
    background: white;
    cursor: pointer;
    position: fixed;
    box-shadow: -6px 3px 34px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: -6px 3px 34px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: -6px 3px 34px -10px rgba(0,0,0,0.75);
    #btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    right: 2rem;
    bottom: 2rem;
    font-size: 40px;
    transition: display .3s linear .3s;
`

const ButtonScrollToTop = () => {
  const [isShowed, setShowed] = useState<boolean>(false)
  useEffect(
    () => {
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 0) {
          setShowed(true)
        } else {
          setShowed(false)
        }
      })
    }, []
  )
  return (
    <>

      {isShowed ?
        <Container>
          <span
            id='btn'
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' })
            }}>
            <FaAngleUp />
          </span>
        </Container>
        : null}

    </>
  )
}

export default ButtonScrollToTop
