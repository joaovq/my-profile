'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Project, projects } from '@/app/domain/model/project'
import styled from 'styled-components'

const Content = styled.main`
  margin: 7rem 5rem;
  .title  {
    h1 {
      font-size: 48px;
    }
    display: flex;
    flex-direction: column;
    gap: 1.76rem;
    .desc {
      color: #717172;
    }
    .tags {
      font-size: x-large;
    }
  }
`

const ProjectPage = ({ params }: ProjectPageProps) => {
  const [project, setProject] = useState<Project>()
  useEffect(() => {
    const projectFound = projects.find(project => project.id == params.id)
    setProject(projectFound)
  }, [params.id])
  return (
    <>
      <Header />
      <Content>
        <div className="title">
          <h1>{project?.name}</h1>
          <h4 className='desc'>{project?.description}</h4>
          <div className="tags">
          Tags: 
          {project?.technologies.map((tech, key) => {
            return (
              <>
                <span key={tech.id} className='tech'> {tech.name}</span>{key != project.technologies.length - 1 ? "," : ""}
              </>
            )
          })}
        </div>
        </div>
      </Content>
    </>
  )
}

type ProjectPageProps = {
  params: {
    id: number
  },
}

export default ProjectPage