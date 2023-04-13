import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Geocoder from 'react-native-geocode';
// import App from './App';

const GeoCoder = () => {
  const getAddress = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        // let NY = {
        //   lat: 40.7809261,
        //   lng: -73.9637594
        // };
        // Geocoder.geocodePosition(NY).then(res => {
        Geocoder.geocodePosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        })
          .then(res => {
            // res is an Array of geocoding object (see below)
            console.log(res);
            setAddress(res);
          })
          .catch(err => console.log(err));
      }
    });
  };
  return (
    <View>
      {/* <Text>GeoCoder</Text> */}

      <TouchableOpacity onPress={getAddress}>
        <Text>Click to see location.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeoCoder;
