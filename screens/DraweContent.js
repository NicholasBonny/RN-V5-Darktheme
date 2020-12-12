import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
  TouchableRipple,
  Avatar,
} from 'react-native-paper';
import images from '../assets/images';
import icons from '../assets/icons';
import {AuthContext} from '../components/context';

const DraweContent = (props) => {
  const {toggelTheme} = useContext(AuthContext);
  const paperTheme = useTheme();

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image source={images.profile} size={50} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Bonny Nicholas</Title>
                <Caption style={styles.caption}>@nbonny19</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.caption, styles.paragraph]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.caption, styles.paragraph]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.HomeIcon}
                  style={{width: 20, height: 20, tintColor: color}}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.UserIcon}
                  style={{width: 20, height: 20, tintColor: color}}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.BookmarkIcon}
                  style={{width: 20, height: 20, tintColor: color}}
                />
              )}
              label="Book mark"
              onPress={() => {
                props.navigation.navigate('BookMark');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.GearIcon}
                  style={{width: 20, height: 20, tintColor: color}}
                />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Setting');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.SupportIcon}
                  style={{width: 20, height: 20, tintColor: color}}
                />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple onPress={() => toggelTheme()}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Image
              source={icons.Signout}
              style={{width: 20, height: 20, tintColor: color}}
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DraweContent;
