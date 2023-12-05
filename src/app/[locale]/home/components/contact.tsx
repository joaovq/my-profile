'use client'
import styled from 'styled-components'
import ContactForm from './contactForm'
import { useTranslations } from 'next-intl'

const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .title {
        font-size: 36px;
    }
    .content {
      width: 80%;
      padding: 6rem 0;
      display: flex;
      gap: 1rem;
      flex-direction: column;
    }
    @media (min-width: 500px) {
    }
`

export const Contact = () => {
  const t = useTranslations("Contact")
  return (
    <Container id='contact'>
      <div className="content">
        <h1 className="title">{t("title")}</h1>
        <ContactForm />
      </div>
    </Container>
  )
}