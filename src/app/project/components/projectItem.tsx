import { Project } from '@/app/domain/model/project'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
min-width: 200px;
.projectTitle {
    color: white;
}
.description {
    color: white;
    font-weight: lighter;
}
#btn {
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 10px;
    max-width: 100px;
    &:hover {
        cursor: pointer;
        opacity: .8;
    }
}
`

export const ProjectItem = (data:Project) => {
    return (
        <Container>
            <div className="content">
            <h2 className='projectTitle'>{data.name}</h2>
            <p className='description'>{data.description}</p>
            </div>
            <a href={`/project/${data.id}/`} id='btn'>See more</a>
        </Container>
    )
}