import React from 'react';
import { PaperProvider } from '@components/mobile';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from '../../../navigator';
import '@localization/mobile';
const Setup = () => {
  console.log('SETUP');
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Setup;
