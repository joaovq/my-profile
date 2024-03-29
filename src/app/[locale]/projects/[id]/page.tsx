'use client'
import React, { useEffect, useState } from 'react'
import { Project, allProjects as projects } from '@/app/domain/model/project'
import styled from 'styled-components'
import Link from 'next/link'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import OtherProjects from '../components/otherProjects'
import { useProject } from './project.hook'
import { useTranslations } from 'next-intl'
import LinkList from '../components/linklist'

const Content = styled.main`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  .project {
    width: 80%;
  }
  .aboutProject {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .title  {
    h2 {
      font-size: 32px;
      margin-right: 90px;
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
  .content-desc {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
  .links {
    display: flex;
    margin-top: 2rem;
    gap: 1.2rem;
    .link {
      border: .1px solid gray;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      padding: 10px;
      color: black;
      font-size: 24px;
      &:hover {
        opacity: .8;
        color: blue;
        svg {
          transform: scale(1.1);
          transition: all .4s;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .aboutProject {
      h2 {
        font-size: 20px;
      }
    }
    .desc {
      font-size: 18px;
    }
    .tags {
      font-size: 18px;
    }
  }
`

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { project, otherProjects } = useProject(params.id)
  const t = useTranslations("ProjectPage")
  return (
    <>
      <Content>
        <div className="project">
          <div className="title">
            <div className='aboutProject'>
              <h2>{t("ProjectItem." + project?.name + ".name")}</h2>
              <h4 className='desc'>{t("ProjectItem." + project?.name + `.description`)}</h4>
            </div>
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
          <div className='content-desc'>
            {
              project?.text !== "" ?
                <>
                  <h1>{t("description")}</h1>
                  <ReactMarkdown>{t("ProjectItem." + project?.name + `.text`)}</ReactMarkdown>
                </> : null
            }
          </div>
          <div className='content-desc'>
            <h1>Links</h1>
          </div>
          <div className='links'>
            {project?.links ? <LinkList project={project}/> : "No links"}
          </div>
          <OtherProjects projects={otherProjects} />
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