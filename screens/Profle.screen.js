import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {
  Avatar,
  Text,
  Caption,
  TouchableRipple,
  Title,
} from 'react-native-paper';
import icons from '../assets/icons';
import images from '../assets/images';

const ProfleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={images.profile} size={80} />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop: 15, marginBottom: 5}]}>
              Nicholas Bonny
            </Title>
            <Caption style={styles.caption}>@nbonny</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Image
            source={icons.MarkerIcon}
            style={{width: 20, height: 20, tintColor: '#777'}}
          />
          <Text style={{marginLeft: 20, color: '#777'}}>Kampala, Uganda</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={icons.PhoneIcon}
            style={{width: 20, height: 20, tintColor: '#777'}}
          />
          <Text style={{marginLeft: 20, color: '#777'}}>+256-7043256</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={icons.EmailIcon}
            resizeMode="contain"
            style={{width: 20, height: 20, tintColor: '#777'}}
          />
          <Text style={{marginLeft: 20, color: '#777'}}>nbonny@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#ddd', borderRightWidth: 1},
          ]}>
          <Title>$200</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={[styles.infoBox]}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image
              source={icons.HeartIcon}
              style={{tintColor: '#ff6347', height: 25, width: 25}}
            />
            <Text style={styles.menuItemText}>Your Favourites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image
              source={icons.CardIcon}
              style={{tintColor: '#ff6347', height: 25, width: 25}}
            />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image
              source={icons.ShareIcon}
              style={{tintColor: '#ff6347', height: 25, width: 25}}
            />
            <Text style={styles.menuItemText}>Tell your friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image
              source={icons.SupportIcon}
              style={{tintColor: '#ff6347', height: 25, width: 25}}
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Image
              source={icons.GearIcon}
              style={{tintColor: '#ff6347', height: 25, width: 25}}
            />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777',
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
  },
});

export default ProfleScreen;
