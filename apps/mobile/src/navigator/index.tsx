import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './routes';
import Signup from '../features/signup/Signup';
import SignupSuccess from '../features/signup/SignupSuccess';
import WebComponent from '../features/webview';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#FFFFFF'},
        gestureEnabled: false,
      }}>
      <Stack.Screen name={Routes.STACK__PRE_LOGIN} component={PreLoginStack} />
      <Stack.Screen
        name={Routes.STACK__POST_LOGIN}
        component={PostLoginStack}
      />
    </Stack.Navigator>
  );
};

const PreLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ROUTE_SIGNUP}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen name={Routes.ROUTE_SIGNUP} component={Signup} />
      <Stack.Screen
        name={Routes.ROUTE_SIGNUP_SUCCESS}
        component={SignupSuccess}
      />
      <Stack.Screen name={Routes.ROUTE_WEBVIEW} component={WebComponent} />
    </Stack.Navigator>
  );
};

const PostLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ROUTE_DASHBOARD}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen name={Routes.ROUTE_DASHBOARD} component={Signup} />
    </Stack.Navigator>
  );
};
