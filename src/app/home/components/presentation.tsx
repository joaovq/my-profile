import React from 'react'
import styled from 'styled-components'
import MainImage from '../../../../public/main-image.png'
import Image from 'next/image'

const SectionPresentation = styled.section`
  @import '../../page.module.scss';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
`

const Presentation = () => {
  return (
    <SectionPresentation>
      <Image src={MainImage} alt='Human computer interaction' style={{
        width: "60%", height: "auto",
        minWidth: 300,
      }} />
      <div className="context-presentation">
        <div className="text">
        <h1>Software developer</h1>
        <span>Development of web and mobile apps</span>
        </div>
        <div className="box-button">
          <a href="#contact" id='btn-contact'>Contact me</a>
          <a href="#mobileprojects" id='btn-myproject'>See my projects</a>
        </div>
      </div>
      </SectionPresentation>
  )
}

export default Presentation
