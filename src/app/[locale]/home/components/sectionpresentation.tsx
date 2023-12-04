'use client'
import styled from 'styled-components'
import MainImage from 'public/MPhoto.png'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import React from 'react'

const SectionPresentation = styled.section`
  @import '../../page.module.scss';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  padding: 1rem;
  min-height: 85vh;
  gap: 1rem;
  .main-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .social-item {
    border: .1px solid gray;
    display: flex;
    padding: 10px;
    align-items: center;
    border-radius: 50px;
    font-size: 28px;
    color: black;
    svg {
      margin-top: 1px;
    }
    &:hover {
      opacity: .8;
      svg {
        color: blue;
        transform: scale(1.1);
        transition: all .3s;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const SectionPresentationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SectionPresentation>
      <div className='main-image'>
        <Image src={MainImage} alt='Human computer interaction' style={{
          width: "100%", height: "auto",
          minWidth: 200,
          marginRight: 40,
          maxWidth: 320
        }}
          placeholder="blur"
          blurDataURL={'public/MPhoto.png'}
        />
        <div className='social'>
          <Link href={"https://www.linkedin.com/in/joaovitorqueiroz/"} target='_blank' className='social-item'>
            <FaLinkedin />
          </Link>
          <Link href={"https://github.com/joaovq"} target='_blank' className='social-item'>
            <FaGithub />
          </Link>
        </div>
      </div>
      {children}
    </SectionPresentation>
  )
}

export default SectionPresentationLayout
