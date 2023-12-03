import React from 'react'
import styled from 'styled-components'
import MainImage from 'public/MPhoto.png'
import Image from 'next/image'
import { FaAws, FaGithub, FaLinkedin, FaVoicemail } from 'react-icons/fa'
import Link from 'next/link'

const SectionPresentation = styled.section`
  @import '../../page.module.scss';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  padding: 1rem;
  min-height: 100vh;
  .context-presentation {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .box-button {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }
  #btn-contact {
    background: transparent;
    border: none;
    color: black;
    &:hover{
      opacity: .8;
    }
  }
  #btn-myproject {
    background: black;
    border-radius: 10px;
    padding: .8rem 1rem;
    color: white;
    transition: all .3s;
    &:hover {
      transform: translateY(-10px);
    }
  }
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
`

const Presentation = () => {
  return (
    <SectionPresentation>
      <div className='main-image'>
        <Image src={MainImage} alt='Human computer interaction' style={{
          width: "100%", height: "auto",
          minWidth: 200,
          marginRight: 40,
          maxWidth: 400
        }} />
        <div className='social'>
          <Link href={"https://www.linkedin.com/in/joaovitorqueiroz/"} target='_blank'  className='social-item'>
            <FaLinkedin/>
          </Link>
          <Link href={"https://github.com/joaovq"} target='_blank' className='social-item'>
            <FaGithub/>
          </Link>
        </div>
      </div>
      <div className="context-presentation" data-aos="zoom-out-left">
        <div className="text">
          <h1>Software developer</h1>
          <span>Development of web and mobile apps</span>
        </div>
        <div className="box-button">
          <a href="#mobileprojects" id='btn-myproject'>See my projects</a>
        </div>
      </div>
    </SectionPresentation>
  )
}

export default Presentation
