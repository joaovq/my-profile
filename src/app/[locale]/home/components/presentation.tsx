import SectionPresentationLayout from './sectionpresentation'
import CallToActionPresentation from './CallToActionPresentation'
import { useTranslations } from 'next-intl'

const Presentation = () => {
  const t = useTranslations("Presentation")
  return (
    <SectionPresentationLayout>
      <CallToActionPresentation title={t("title")} description={t("description")} textButton={t("textButton")} />
    </SectionPresentationLayout>
  )
}

export default Presentation