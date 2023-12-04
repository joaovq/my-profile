import MobileProjects from './home/components/mobileProjects'
import WebProjects from './home/components/webProjects'
import Footer from '../components/footer/footer'
import { Contact } from './home/components/contact'
import ButtonScrollToTop from '../components/buttonscrolltotop/scrooltotop'
import { useTranslations } from 'next-intl'
import AboutPresentation from './about/components/AboutPresentation'
import { Presentation } from './home/components/Presentation'

export default function Home() {
  const t = useTranslations()
  return (
    <main>
      <Presentation/>
      <AboutPresentation/>
      <MobileProjects title={t("MobileProjects.title")}/>
      <WebProjects/>
      <Contact/>
      <ButtonScrollToTop/>
      <Footer/>
    </main>
  )
}
