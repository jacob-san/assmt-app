import React, { createContext, PropsWithChildren } from 'react';
import getTheme from './getTheme';
import { theme as ThemeContext } from './useTheme';

interface ThemeProviderProps {
  value: any;
}

const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = (
  props: PropsWithChildren<ThemeProviderProps>
) => {
  const { children, value } = props;
  const { country } = value ?? { country: undefined };

  const theme = getTheme(country);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
