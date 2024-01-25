import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, Flex } from '@components/mobile';
import { COUNTRY } from '@types';

const CountrySelector = ({ value, onChange }) => {
  const { t } = useTranslation();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onChangeCountry = (country: string) => () => {
    closeMenu();
    onChange(country);
  };
  return (
    <Flex
      style={{
        paddingTop: 10,
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
            label={t('signup.labels.country')}
          ></Button>
        }
      >
        <Menu.Item
          onPress={onChangeCountry(COUNTRY.AE)}
          title={t('signup.labels.uae')}
        />
        <Menu.Item
          onPress={onChangeCountry(COUNTRY.IN)}
          title={t('signup.labels.india')}
        />
      </Menu>
    </Flex>
  );
};

export default CountrySelector;
