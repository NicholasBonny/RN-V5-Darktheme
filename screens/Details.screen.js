import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Details Screen</Text>
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

export default DetailsScreen;
