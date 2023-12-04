'use client'
import LogoIcon from '@/app/components/logo/Logo'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaMap } from 'react-icons/fa'
import styled from 'styled-components'
import StaticLogo from 'public/logo/logo-full-transparent.png'

const SectionAbout = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #c9c9c91d;
    padding: 1rem .5rem;
    margin: 3rem;
    -webkit-box-shadow: 2px -5px 65px -15px rgba(87, 87, 87, 0.75);
    -moz-box-shadow: 2px -5px 65px -15px rgba(87, 87, 87, 0.75);
    box-shadow: 2px -5px 65px -15px rgba(87, 87, 87, 0.75);
    .title {
        font-size: 40px;
    }
    .content {
        width: 75%;
    }
    .storytelling {
        margin: 2rem 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .presentation {
        text-align: center;
        line-height: 40px;
    }
`

const AboutPresentation = () => {
    const t = useTranslations("AboutPresentation")
    return (
        <SectionAbout className="content">
            <h1 className="title">{t("title")}</h1>
            <div className="storytelling">
                <LogoIcon image={StaticLogo} style={{
                    maxWidth: 300
                }} />
                <div className="presentation">
                    <h2>Olá, seja bem vindo a minha história</h2>
                    <p>Meu nome é João Vítor!</p>
                    <p><FaMap /> Sou de Salvador/Bahia</p>
                </div>
            </div>
        </SectionAbout>
    )
}

export default AboutPresentation