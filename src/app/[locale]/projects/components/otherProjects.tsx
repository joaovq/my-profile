import { Project } from '@/app/domain/model/project'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import { ProjectItem } from './projectItem'

const OtherProjectsContainer = styled.div`
    .moreProjects {
    padding: 4rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .otherProject {
      padding: 2rem 3rem;
      height: 100%;
      max-width: 400px;
      border-radius: 10px;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 200px;
      -webkit-box-shadow: 8px 12px 15px -7px rgba(129, 129, 129, 0.75);
      -moz-box-shadow: 8px 12px 15px -7px rgba(129, 129, 129, 0.75);
      box-shadow: 8px 12px 15px -7px rgba(129, 129, 129, 0.75);
      transition: all .3s;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    .btn {
        background: #1b1b1b;
        width: 150px;
        text-align: center;
        padding: .8rem 0;
        color: white;
        border-radius: 10px;
        transition: all .7s;
        &:hover {
            opacity: .8;
        }
    }
  }
`

type Props = {
    projects: Project[]
}

const OtherProjects = ({projects}:Props) => {
    const t = useTranslations("OtherProjects")
    return (
        <OtherProjectsContainer>
            <div className='content-desc'>
                <h1>{t("title")}</h1>
            </div>
            <div className="moreProjects">
                {projects.map((project, key) => {
                    return (
                        <div key={key} className="otherProject">
                            <ProjectItem
                                key={key} 
                                data={project}
                                colorPrimary="#1E1E1E"
                                colorSecondary='#FFF'
                            />
                        </div>
                    )
                })}
            </div>
        </OtherProjectsContainer>
    )
}

export default OtherProjects