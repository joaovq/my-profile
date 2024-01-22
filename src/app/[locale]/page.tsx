import MobileProjects from './home/components/mobileProjects'
import WebProjects from './home/components/webProjects'
import Footer from '../components/footer/footer'
import { Contact } from './home/components/contact/contact'
import ButtonScrollToTop from '../components/buttonscrolltotop/scrooltotop'
import { useTranslations } from 'next-intl'
import AboutPresentation from './about/components/AboutPresentation'
import Presentation from './home/components/presentation'

export default function Home() {
  const t = useTranslations()
  return (
    <main>
      <Presentation/>
      <AboutPresentation/>
      <WebProjects/>
      <MobileProjects title={t("MobileProjects.title")}/>
      <Contact/>
      <ButtonScrollToTop/>
      <Footer/>
    </main>
  )
}
