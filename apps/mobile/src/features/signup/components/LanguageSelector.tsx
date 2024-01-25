import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, Flex } from '@components/mobile';
import { LANGUAGE } from '@types';

const LanguageSelector = ({ value, onChange }) => {
  const { t } = useTranslation();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onChangeLang = (lang: string) => () => {
    closeMenu();
    onChange(lang);
  };
  return (
    <Flex
      style={{
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            onPress={openMenu}
            label={t('signup.labels.language')}
          ></Button>
        }
      >
        <Menu.Item
          onPress={onChangeLang(LANGUAGE.EN)}
          title={t('signup.labels.english')}
        />
        <Menu.Item
          onPress={onChangeLang(LANGUAGE.AR)}
          title={t('signup.labels.arabic')}
        />
        <Menu.Item
          onPress={onChangeLang(LANGUAGE.FR)}
          title={t('signup.labels.french')}
        />
        <Menu.Item
          onPress={onChangeLang(LANGUAGE.DE)}
          title={t('signup.labels.german')}
        />
      </Menu>
    </Flex>
  );
};

export default LanguageSelector;
