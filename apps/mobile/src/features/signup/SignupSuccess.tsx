import { Button, Flex } from '@components/mobile';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import Routes from 'navigator/routes';
import Config from 'config'

const SignupSuccess = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    RNSecureStorage.multiGet(['username', 'password'])
      .then((res) => {
        setUsername(res.username);
        console.log({ res });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const proceedToLogin = () => {
    navigation.navigate(Routes.ROUTE_WEBVIEW);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Text variant="displaySmall">{t('signupSuccess.title', {username})}</Text>
      <Text variant="headlineMedium">{t('signupSuccess.subtitle')}</Text>
      <Button
        label={t('signup.labels.login')}
        //   style={style.spacerTop}
        mode="contained"
        onPress={proceedToLogin}
      ></Button>
        <Text>{`Web URL: ${Config.WEB_APP_URL}`}</Text>
    </Flex>
  );
};

export default SignupSuccess;
