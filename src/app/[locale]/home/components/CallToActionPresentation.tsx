'use client'
import styled from "styled-components"

const CallToAction = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  .box-button {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
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

type Props = {
    title: string;
    description: string;
    textButton: string;
}

const CallToActionPresentation = (props: Props) => {
    return (
        <CallToAction data-aos="zoom-out-left">
            <div className="text">
                <h1>{props.title}</h1>
                <span>{props.description}</span>
            </div>
            <div className="box-button">
                <a href="#mobileprojects" id='btn-myproject'>{props.textButton}</a>
            </div>
        </CallToAction>
    )
}

export default CallToActionPresentation