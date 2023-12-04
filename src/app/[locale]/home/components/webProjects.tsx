'use client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Project, webProjects  as projects} from '@/domain/model/project'
import { ProjectItem } from '@/app/[locale]/projects/components/projectItem'
import { useTranslations } from 'next-intl'

const ProjectsContainer = styled.section`
    background: white;
    min-height: 60vh;
    display: flex;
    padding: 3rem 0rem;
    justify-content: center;
    .title {
        font-size: 2.5rem;
        position: sticky;
        top: 0;
        left: 0;
        background: white;
        padding: 10px 0;
    }
    .content {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`

const WebProjects = () => {
    const [webProjects, setProjects] = useState<Project[]>([])
    useEffect(() => {
        setProjects(projects)
    }, [])
    const t = useTranslations()
    return (
        <ProjectsContainer id='webprojects'>
            <div className="content">
                <h1 className="title">{t("WebProjects.title")}</h1>
                <div className="projects">
                    {webProjects?.map(
                        (project, index) =>
                            <ProjectItem
                                key={index} 
                                data={project}
                                colorPrimary="#1E1E1E"
                                colorSecondary='#FFF'
                            />)
                    }
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default WebProjects