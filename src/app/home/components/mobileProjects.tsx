'use client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Project, projects } from '@/app/domain/model/project'
import { ProjectItem } from '@/app/project/components/projectItem'

const MobileProjectsContainer = styled.section`
    background: black;
    min-height: 60vh;
    display: flex;
    padding: 3rem 0rem;
    justify-content: center;
    .title {
        color: white;
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

const MobileProjects = () => {
  const [mobileProjects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    setProjects(projects)
  },[])
  return (
    <MobileProjectsContainer>
        <div className="content">
            <h1 className="title">Mobile</h1>
            <div className="projects">
                {mobileProjects?.map((project, index) => <ProjectItem key={index} data={project} colorPrimary='#FFF'/>)}
            </div>
        </div>
    </MobileProjectsContainer>
  )
}

export default MobileProjects