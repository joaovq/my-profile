import { useTranslations } from 'next-intl'
import HeaderContent from './headerContent'
import LocaleSwitcher from '../localeswitcher/LocaleSwitcher'

export function Header() {
  const t = useTranslations("Header")
  return (
    <HeaderContent home={t("home").toUpperCase()} about={t("about").toUpperCase()} contactMe={t("contact_me").toUpperCase()}>
      <LocaleSwitcher/>
    </HeaderContent>
  )
}

export default Header