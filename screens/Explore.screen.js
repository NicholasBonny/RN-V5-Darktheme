import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import icons from '../assets/icons';
import images from '../assets/images';
import {useTheme} from '@react-navigation/native';

const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visiblility: 'off',
      },
    ],
  },
];

const ExploreScreen = () => {
  const theme = useTheme();
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{latitude: 37.78825, longitude: -122.4324}}
        image={icons.MarkerIcon}>
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}> Favourite resturant</Text>
              {/* <Text>A short description</Text> */}
              <Image
                style={styles.image}
                source={images.profile}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  map: {
    height: '100%',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    width: 150,
    padding: 15,
    borderWidth: 0.5,
  },
  arrow: {
    alignSelf: 'center',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    marginTop: -16,
  },
  arrowBorder: {
    alignSelf: 'center',
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    borderWidth: 16,
    marginTop: -0.5,
    borderTopColor: '#007a87',
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
});
