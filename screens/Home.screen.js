import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to Profile screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
