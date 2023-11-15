'use client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Project, projects } from '@/app/domain/model/project'
import { ProjectItem } from '@/app/project/components/projectItem'

const ProjectsContainer = styled.section`
    background: white;
    min-height: 60vh;
    display: flex;
    padding: 3rem 0rem;
    justify-content: center;
    .title {
        font-size: 36px;
    }
    .content {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        width: 100%;
        margin: 6rem 0rem;
        justify-content: space-between;
        align-items: center;
    }
`

const WebProjects = () => {
    const [webProjects, setProjects] = useState<Project[]>([])
    useEffect(() => {
        setProjects(projects)
    }, [])
    return (
        <ProjectsContainer>
            <div className="content">
                <h1 className="title">Web apps and sites</h1>
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