import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import images from '../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../assets/icons';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          // duration="1500"
          style={styles.logo}
          source={images.profile}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUp">
        <Text style={[styles.title, {color: colors.text}]}>
          Stay connected with everyone!
        </Text>
        <Text style={styles.text}>Signin with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <Image
                style={{width: 20, height: 20, tintColor: 'white'}}
                source={icons.NextIcon}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
