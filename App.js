/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NativeDarkTheme,
  DefaultTheme as NativeDefaultTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabNav from './screens/MainTabNav';
import DrawerContent from './screens/DraweContent';
import SupportScreen from './screens/Support.screen';
import BookMarkScreen from './screens/BookMark.Screen';
import SettingsScreen from './screens/Settings.screen';
import RootStackScreen from './screens/RootStackScreen';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import {AuthContext} from './components/context';

const Drawer = createDrawerNavigator();

const CustomDefaultTheme = {
  ...NativeDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NativeDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    backgroundColor: '#fff',
    text: '#333',
  },
};

const CustomDarkTheme = {
  ...NativeDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NativeDarkTheme.colors,
    ...PaperDarkTheme.colors,
    backgroundColor: '#333',
    text: '#fff',
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const authContext = React.useMemo(
    () => ({
      toggelTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <RootStackScreen />
          {/* <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeTabNav" component={MainTabNav} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="BookMark" component={BookMarkScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator> */}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
