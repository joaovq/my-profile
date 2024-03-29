import { Project } from '@/app/domain/model/project'
import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../navigation'
import { useTranslations } from 'next-intl'

const Container = styled.div<{ $colorPrimary: string, $colorSecondary: string, }>`
display: flex;
flex-direction: column;
gap: 2rem;
max-width: 300px;
width: 100%;
height: 100%;
.content {
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    max-lines: 1;
    gap: 1rem;
}
.projectTitle {
    color: ${props => props.$colorPrimary};
}
.description {
    color: ${props => props.$colorPrimary};
    font-weight: normal;
}
#btn {
    background-color: ${props => props.$colorPrimary};
    border-radius: 10px;
    color: ${props => props.$colorSecondary || "#1E1E1E"};
    padding: 10px;
    max-width: 110px;
    &:hover {
        cursor: pointer;
        opacity: .8;
    }
}
.tech {
    color: ${props => props.$colorPrimary};
}
@media screen and (max-width: 500px) {
    h3 {
        font-size: 1rem;
    }
}
`

export const ProjectItem = ({ data, colorPrimary, colorSecondary = "#1E1E1E"}: ProjectItemProps) => {
    const t = useTranslations("ProjectPage")
    return (
        <Container $colorPrimary={colorPrimary} $colorSecondary={colorSecondary}>
            <div className="content">
                <h3 className='projectTitle'>{t("ProjectItem."+data.name+".name")}</h3>
                <p className='description'>{t("ProjectItem."+data.name+".description")}</p>
            </div>
            <div className='tech'>
                Tags:
                {data.technologies.map((tech, key) => {
                    return (
                        <>
                            <span key={key} className='tech'> {tech.name}</span>{key != data.technologies.length - 1 ? "," : ""}
                        </>
                    )
                })}
            </div>
            <Link href={{
                pathname: "/projects/[id]", params: {
                    id: data.id
                }
            }} id='btn'>
                {t("ProjectItem.textButton")}
            </Link>
        </Container>
    )
}

type ProjectItemProps = {
    key: number,
    data: Project,
    colorPrimary: string,
    colorSecondary?: string,
}