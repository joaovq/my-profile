'use client'
import LogoIcon from '@/app/components/logo/Logo'
import { useTranslations } from 'next-intl'
import React from 'react'
import {
    FaAndroid,
    FaAws,
    FaBatteryFull,
    FaBug, FaCloud, FaGit,
    FaGithub, FaGooglePlay, FaJava,
    FaJs,
    FaMobile,
    FaNetworkWired,
    FaPython,
    FaReact,
    FaSearchLocation
} from 'react-icons/fa'
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
        line-height: 40px;
        max-width: 460px;
        width: 100%;
        padding: 0 .9rem;
        .line {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            svg {
                font-size: large;
            }
        }
    }
    .stacks {
        svg {
            font-size: 36px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                color: blue;
                transform: scale(1.1);
            }
        }
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        width:60%;
        justify-content: space-around;
        padding: 3rem 0;
        color: gray;
    }
    @media (max-width: 497px) {
        .presentation {
            span {
                font-size: 12px;
            }
            .line {
                flex-direction: column;
                align-items: center;
            }
            h2 {
                font-size: 16px;
            }
        }
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
                    <h2>{t("infoTitle")}</h2>
                    <br />
                    <span style={{
                        marginBottom: 10,
                        textAlign: "justify"
                    }}>
                        {t("presentationTitle")}
                    </span>
                    <br />
                    <div className='line'>
                        <FaSearchLocation /><span>{t("location")}</span>
                    </div>
                    <div className="line">
                        <FaNetworkWired /> <span>{t("time")}</span>
                    </div>
                    <div className="line">
                        <FaBatteryFull /> <span>{t("curious")}</span>
                    </div>
                    <div className="line">
                        <FaBug /> <span>{t("problemSolver")}</span>
                    </div>
                    <div className="line">
                        <FaGooglePlay /> <span>{t("publishedApp")}</span>
                    </div>
                </div>
            </div>
            <h1 className="title">Stacks</h1>
            <div className="stacks">
                <FaReact title="React" />
                <FaAndroid title="Android" />
                <FaJava title="Java" />
                <FaPython title="Python" />
                <FaJs title="JavaScript" />
                <FaAws title="Amazon web services" />
                <FaGit title="Git" />
                <FaGithub title="GitHub" />
                <FaMobile title="Mobile" />
                <FaCloud title="Cloud computing" />
                <FaGooglePlay title="Google Play" />
            </div>
        </SectionAbout>
    )
}

export default AboutPresentation