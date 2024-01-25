import i18n from '@localization/web';
import { useEffect } from 'react';

export default (lang: string): void => {
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);
};
