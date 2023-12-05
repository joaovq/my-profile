import { useTranslations } from 'next-intl'
import HeaderContent from './headerContent'
import LocaleSwitcher from '../localeswitcher/LocaleSwitcher'
import SearchForm from '../searchform/SearchForm'

export function Header() {
  const t = useTranslations("Header")
  return (
    <HeaderContent home={t("home").toUpperCase()} about={t("about").toUpperCase()} contactMe={t("contact_me").toUpperCase()}>
      <LocaleSwitcher/>
      {/* TODO search projects */}
      <SearchForm/>
    </HeaderContent>
  )
}

export default Header