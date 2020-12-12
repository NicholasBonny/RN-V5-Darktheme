import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../assets/icons';
import {useTheme} from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register now!</Text>
      </View>
      <Animatable.View
        style={[styles.footer, {backgroundColor: colors.background}]}
        animation="fadeInUpBig">
        <Text style={[styles.text_footer, {color: colors.text}]}>Email</Text>
        <View style={styles.action}>
          <Image
            style={{width: 25, height: 25, tintColor: colors.text}}
            source={icons.UserOutlineIcon}
          />
          <TextInput placeholder="Your Email" style={styles.textInput} />
          <Animatable.Image
            animation="fadeIn"
            style={{width: 18, height: 18}}
            source={icons.CheckCircleIcon}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35, color: colors.text}]}>
          Password
        </Text>
        <View style={styles.action}>
          <Image
            style={{width: 25, height: 25, tintColor: colors.text}}
            source={icons.LockIcon}
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Image
            style={{width: 18, height: 18, tintColor: colors.text}}
            source={icons.ShowIcon}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35, color: colors.text}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Image
            style={{width: 25, height: 25, tintColor: colors.text}}
            source={icons.LockIcon}
          />
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Image
            style={{width: 18, height: 18, tintColor: colors.text}}
            source={icons.ShowIcon}
          />
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: 'white'}]}>Sign Up</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.navigate('SigninScreen')}
            style={[
              styles.signIn,
              {borderColor: '#009387', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  text_header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 28,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? -12 : 0,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
