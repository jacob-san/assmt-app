import { PropsWithChildren, ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { useTheme, ThemeProvider as Provider } from '@theme';

export const ThemeProvider = (props: PropsWithChildren<{ value: any }>) => {
  const { children, value } = props;

  const { country } = value ?? { country: undefined };
  return (
    <Provider value={{ country }}>
      <ProxyProvider>{children}</ProxyProvider>
    </Provider>
  );
};

const ProxyProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const themeObj = createTheme({
    palette: {
      primary: {
        main: theme.colors.primary,
      },
    },
  });
  return <MuiThemeProvider theme={themeObj}>{children}</MuiThemeProvider>;
};
