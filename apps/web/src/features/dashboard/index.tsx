import { Box, makeStyles } from '@components/web';
import { Typography } from '@components/web';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@theme';
import useSetLanguage from './hooks/useSetLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@auth';
import React from 'react';

const useStyles = makeStyles((theme: any) => ({
  dashboardContainer: {
    margin: 'auto',
    maxWidth: 600,
  },
  header: {
    backgroundColor: '#3366ff',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}));

const Dashboard = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const { state = {} } = useLocation();
  const { t } = useTranslation();
  useSetLanguage(state.lang);
  const auth = useAuth();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.colors.primary,
          px: 3,
          py: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          color={theme.colors.onPrimary}
          variant="h4"
          className={classes.title}
        >
          {`${t('dashboard.title.hello')} 👋`}
        </Typography>
        <Typography
          variant="h5"
          color={theme.colors.onPrimary}
          sx={{
            mt: 1,
          }}
        >
          {t('dashboard.title.welcomeUser', { username: state.username })}
        </Typography>
        <Typography
          variant="subtitle1"
          color={theme.colors.onPrimary}
          sx={{
            mt: 1,
          }}
        >
          {`Language preference: ${state.lang}`}
          <br />
          {`Theme based on country: ${state.country}`}
          <br />
        </Typography>
      </Box>
    </>
  );
};

export default Dashboard;
