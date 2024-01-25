import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Alert,
  Typography,
  makeStyles,
} from '@components/web';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@auth';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    ReactNativeWebView: { postMessage: (data: string) => void };
    receiveLoginDetails: (loginDetails: any) => void;
    mobile: {
      getLoginDetails: () => void;
    };
  }
}

const format = (str: string): string => {
  return str.toLowerCase().trim();
};

const useStyles = makeStyles((theme: any) => ({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const Signin = (): JSX.Element => {
  const classes = useStyles();
  const [error, setError] = useState<boolean>(false);
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const auth = useAuth();
  const {t} = useTranslation()
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 1000);
    }
  }, [error]);

  const setReceiver = (): void => {
    window.receiveLoginDetails = (data) => {
      if (
        state.username === data.username &&
        state.password === data.password
      ) {
        auth.setAuthenticated(true);
        auth.setCountry(data.country);
        auth.setLang(data.lang);

        navigate('dashboard', {
          state: {
            username: data.username,
            country: data.country,
            lang: data.lang,
          },
        });
      } else {
        setError(true);
      }
    };
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setReceiver();
    const mobile = window?.mobile;
    if (mobile && mobile.hasOwnProperty('getLoginDetails')) {
      mobile.getLoginDetails();
    }
  };

  return (
    <Box sx={{ px: 2 }} display="flex" flexDirection="column">
      <Typography variant="h6" className={classes.title} sx={{ mt: 15 }}>
        Web sign in
      </Typography>
      <Typography variant="h6" className={classes.title} sx={{ mt: 15 }}>
        {JSON.stringify(auth)}
      </Typography>
      <TextField
        sx={{ mt: 10 }}
        name="username"
        label="Username"
        variant="outlined"
        onChange={onChangeText}
      />
      <TextField
        sx={{ mt: 2 }}
        name="password"
        label="Password"
        variant="outlined"
        onChange={onChangeText}
      />
      <Button sx={{ mt: 2 }} variant="contained" onClick={onSubmit}>
        {t('dashboard.title.signin')}
      </Button>
      {error && (
        <Alert sx={{ mt: 2 }} severity="error">
          {t('dashboard.validations.invalidCredentials')}
        </Alert>
      )}
    </Box>
  );
};

export default Signin;
