import { Project } from '@/app/domain/model/project'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'

type Props = {
    project?: Project
}

const LinkList = ({ project }: Props) => {
    const ICON_LINK = {
        Github: <FaGithub />,
        Site: <FaLink />,
        GooglePlay: <FaGooglePlay />,
    }
    return (
        <>
            {project?.links.map((link, key) => {
                return (
                    <>
                        <Link href={link.href} key={key} target='_blank' title={link.type} className='link'>
                            {ICON_LINK[link.type]}
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default LinkList