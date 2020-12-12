import React from 'react';
import {Image, Text, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from '../assets/icons';
import Home from './Home.screen';
import Details from './Details.screen';
import Profile from './Profle.screen';
import Explore from './Explore.screen';
import EditProfileScreen from './EditProfile.Screen';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={({navigation}) => ({
        headerLeft: () => (
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Image
              source={Icons.MenuIcon}
              style={{
                tintColor: '#fff',
                marginLeft: 8,
                height: 26,
                width: 26,
              }}
            />
          </TouchableWithoutFeedback>
        ),
      })}
    />
  </HomeStack.Navigator>
);

const DetailStackScreens = () => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#1f65ff'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name="Details"
      component={Details}
      options={({navigation}) => ({
        headerLeft: () => (
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Image
              source={Icons.MenuIcon}
              style={{
                tintColor: '#fff',
                marginLeft: 8,
                height: 26,
                width: 26,
              }}
            />
          </TouchableWithoutFeedback>
        ),
      })}
    />
  </DetailStack.Navigator>
);

const ProfileStackScreens = () => {
  const {colors} = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.text,
        headerTitleStyle: {
          shadowColor: colors.background,
          elevation: 0,
        },
        title: '',
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
              <Image
                source={Icons.MenuIcon}
                style={{
                  tintColor: colors.text,
                  marginLeft: 8,
                  height: 26,
                  width: 26,
                }}
              />
            </TouchableWithoutFeedback>
          ),
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={Icons.EditIcon}
                style={{
                  tintColor: colors.text,
                  marginRight: 8,
                  height: 26,
                  width: 26,
                }}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({navigation}) => ({
          title: 'Edit Profile',
        })}
      />
    </ProfileStack.Navigator>
  );
};

const MainTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // activeColor="#e91e63"
      style={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Image
              source={Icons.HomeIcon}
              style={{tintColor: color, height: 25, width: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreens}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Image
              source={Icons.BellIcon}
              style={{tintColor: color, height: 25, width: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#964fad',
          tabBarIcon: ({color}) => (
            <Image
              source={Icons.UserIcon}
              style={{tintColor: color, height: 25, width: 25}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Image
              source={Icons.GearIcon}
              style={{tintColor: color, height: 25, width: 25}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNav;
