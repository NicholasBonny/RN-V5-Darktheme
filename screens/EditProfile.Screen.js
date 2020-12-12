import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import icons from '../assets/icons';
import images from '../assets/images';
import {useTheme} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditProfileScreen = () => {
  const {colors} = useTheme();
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text>Choose your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButtom}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButtom}>
        <Text style={styles.panelButtonTitle}>Choose from Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButtom}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={images.default}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.CameraIcon}
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: '#fff',
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: '#fff',
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Nicholas Bonny
          </Text>
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.UserOutlineIcon}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.UserOutlineIcon}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.PhoneIcon}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#666"
            autoCorrect={false}
            keyboardType="name-phone-pad"
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.EmailIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.HomeIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <View style={styles.action}>
          <Image
            style={{width: 20, height: 20, tintColor: colors.text}}
            source={icons.MarkerIcon}
          />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, {color: colors.text}]}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.commandButton}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {
      width: -1,
      height: -3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    color: 'grey',
    height: 30,
    marginBottom: 10,
  },
  panelButtom: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    marginVertical: 7,
    alignItems: 'center',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginBottom: Platform.OS === 'android' ? -12 : 0,
    color: '#05375a',
  },
});

export default EditProfileScreen;
