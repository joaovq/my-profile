'use client'
import styled from "styled-components"
import Image from "next/image"
import MainImage from 'public/MPhoto.png'
import { FaMap } from "react-icons/fa"
import { useTranslations } from "next-intl"
import AboutPresentation from "./components/AboutPresentation"

const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .content {
        width: 75%;
        .title {
            font-size: 36px;
        }
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

const AboutScreen = () => {
    const t = useTranslations("About")
    return (
        <Main>
            <AboutPresentation/>
            <section className="content">
                <h1 className="title">{t("title")}</h1>
                <div className="storytelling">
                    <Image src={MainImage} alt='Human computer interaction' style={{
                        width: "100%", height: "auto",
                        minWidth: 200,
                        marginRight: 40,
                        maxWidth: 320
                    }}
                        placeholder="blur"
                        blurDataURL={'public/MPhoto.png'}
                    />
                    <div className="presentation">
                        <h2>Olá, seja bem vindo a minha história</h2>
                        <p>Meu nome é João Vítor!</p>
                        <p><FaMap /> Sou de Salvador/Bahia</p>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default AboutScreen