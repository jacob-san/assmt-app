import React, { useState } from 'react';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import {
  Button,
  TextInput,
  Menu,
  PaperInput,
  BaseLayout,
  Flex,
} from '@components/mobile';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import i18n from '@localization/mobile';
import { COUNTRY, LANGUAGE } from '@types';
import { useForm } from 'react-hook-form';
import countryConfig from './config/countryConfig';
import { Text } from 'react-native-paper';
import LanguageSelector from './components/LanguageSelector';
import CountrySelector from './components/CountrySelector';
import Routes from 'navigator/routes';

type Credentials = {
  username: string;
  password: string;
};

const Signup = ({ navigation }) => {
  const [country, setCountry] = useState(COUNTRY.AE);
  const [lang, setLang] = useState(LANGUAGE.EN);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const _config = countryConfig[country];

  const usernameValue = watch('username');
  const onSubmit = async ({ username, password }: Credentials) => {
    /** Password to be hashed with salt before storing */
    await RNSecureStorage.multiSet(
      { username, password, country, lang },
      { accessible: ACCESSIBLE.WHEN_UNLOCKED }
    );
    navigation.navigate(Routes.ROUTE_SIGNUP_SUCCESS);
  };

  const onChangeCountry = (country: string) => {
    setCountry(country);
  };
  const onChangeLang = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <BaseLayout>
      <LanguageSelector value={lang} onChange={onChangeLang} />
      <CountrySelector value={country} onChange={onChangeCountry} />
      <Flex justifyContent="center" style={style.containerStyle}>
        <Text style={style.capitalize}>{`Selected Language: ${lang}`}</Text>
        <Text style={style.capitalize}>{`Selected Country: ${country}`}</Text>
        <TextInput
          label={t('signup.labels.username')}
          style={style.spacerTop}
          right={<PaperInput.Affix text={usernameValue?.length} />}
          controllerProps={{
            control: control,
            name: 'username',
            rules: {
              required: _config.validations.username.required,
              pattern: {
                value: _config.validations.username.value,
                message: t(`signup.validation.invalid_username`),
              },
            },
          }}
        />
        {/* <Text>{usernameValue?.length}</Text> */}
        {errors.username && (
          <Text style={{ color: 'red' }} variant="labelSmall">
            {errors.username.message}
          </Text>
        )}
        <TextInput
          controllerProps={{
            control: control,
            name: 'password',
            rules: {
              required: true,
            },
          }}
          style={style.spacerTop}
          label={t('signup.labels.password')}
        />
        <Button
          label={t('signup.labels.register')}
          style={style.spacerTop}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        ></Button>
      </Flex>
    </BaseLayout>
  );
};

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    flexGrow: 1,
    height: '80%',
  },
  spacerTop: {
    marginTop: 24,
  },
  capitalize: {
    textTransform: 'uppercase',
  },
});

export default Signup;
