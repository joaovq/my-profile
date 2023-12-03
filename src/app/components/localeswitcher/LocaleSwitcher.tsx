import {useLocale, useTranslations} from 'next-intl';
import {locales} from '@/config';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={currentLocale} label={t('label')}>
      {locales.map((cur) => (
        // TODO fix bug not show select argument in translate
        <option key={cur} value={cur}>
          {t('locale',{locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
