'use client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Project, projects as projects } from '@/domain/model/project'
import { ProjectItem } from '@/app/[locale]/projects/components/projectItem'

const MobileProjectsContainer = styled.section`
    background: black;
    min-height: 60vh;
    display: flex;
    padding: 3rem 0rem;
    justify-content: center;
    width: 100%;
    position: relative;

    .title {
        color: white;
        font-size: 2.5rem;
        position: sticky;
        top: 0;
        left: 0;
        background: black;
        padding: 10px 0;
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
        justify-content: space-between;
        align-items: center;
    }
`

const MobileProjects = () => {
  const [mobileProjects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    setProjects(projects)
  },[])
  return (
    <MobileProjectsContainer id='mobileprojects'>
        <div className="content">
            <h1 className="title">Mobile</h1>
            <div className="projects">
                {mobileProjects?.map((project, index) => <ProjectItem key={project.id} data={project} colorPrimary='#FFF'/>)}
            </div>
        </div>
    </MobileProjectsContainer>
  )
}

export default MobileProjects