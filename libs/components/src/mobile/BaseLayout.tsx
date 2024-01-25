import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const BaseLayout = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView>
      <View style={style.base}>{children}</View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  base: {
    paddingHorizontal: 24,
  },
});

export default BaseLayout;
