import { Project } from '@/app/domain/model/project'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ $colorPrimary: string, $colorSecondary:string,  }>`
display: flex;
flex-direction: column;
gap: 1rem;
min-width: 200px;
.projectTitle {
    color: ${ props => props.$colorPrimary};
}
.description {
    color: ${ props => props.$colorPrimary};
    font-weight: normal;
}
#btn {
    background-color: ${ props => props.$colorPrimary};
    border-radius: 10px;
    color: ${ props => props.$colorSecondary || "#1E1E1E"};
    padding: 10px;
    max-width: 100px;
    &:hover {
        cursor: pointer;
        opacity: .8;
    }
}
`

export const ProjectItem = ({ data, colorPrimary, colorSecondary = "#1E1E1E" }:ProjectItemProps) => {
    return (
        <Container $colorPrimary={colorPrimary} $colorSecondary={colorSecondary}>
            <div className="content">
            <h2 className='projectTitle'>{data.name}</h2>
            <p className='description'>{data.description}</p>
            </div>
            <a href={`/project/${data.id}/`} id='btn'>See more</a>
        </Container>
    )
}

type ProjectItemProps = {
    data: Project,
    colorPrimary: string,
    colorSecondary?: string,
}