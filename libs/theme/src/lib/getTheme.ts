import { COUNTRY } from '@types';
import themes from './themes';

export default (country?: COUNTRY) => {
  return (
    {
      [COUNTRY.AE]: themes.ae,
      [COUNTRY.IN]: themes.in,
      // @ts-expect-error
    }[country] ?? themes.ae
  );
};
