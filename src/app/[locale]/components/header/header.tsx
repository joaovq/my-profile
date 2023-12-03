import { useTranslations } from 'next-intl'
import HeaderContent from './headerContent'

export function Header() {
  const t = useTranslations("Index")
  return (
    <HeaderContent home={t("home").toUpperCase()} about={t("about").toUpperCase()} contactMe={t("contact_me").toUpperCase()} />
  )
}

export default Header