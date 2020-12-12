import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';

const RootStack = createStackNavigator();

export default function RootStackScreen({navigation}) {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignupScreen" component={SignupScreen} />
      <RootStack.Screen name="SigninScreen" component={SigninScreen} />
    </RootStack.Navigator>
  );
}
