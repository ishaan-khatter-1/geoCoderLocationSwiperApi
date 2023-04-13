import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Api from './fetchdata';
import GeoCoder from './geocoder';
import Geocoder from 'react-native-geocoder';
import Swiperdes from './wrapper';
import App2 from './App2';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    // console.log('granted', granted);
    if (granted === 'granted') {
      // console.log('You can use Geolocation');
      return true;
    } else {
      // console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [address, setAddress] = useState(0);

  const getLoc = () => {
    const result = requestLocationPermission();

    result.then(res => {
      // console.log('res is:', res);
      if (res) {
        if (latitude == 0 && longitude == 0) {
          Geolocation.getCurrentPosition(loc => {
            setLatitude(loc.coords.latitude);
            setlongitude(loc.coords.longitude);
          });
        } else {
          setLatitude(0);
          setlongitude(0);
        }
        // if (res) {
        //   return <Api />;
        // }
      }
    });
  };

  const getAddress = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geocoder.geocodePosition({
          lat: latitude,
          lng: longitude,
        })
          .then(add => {
            setAddress(add[0].adminArea);
          })
          .catch(err => console.log(err));
      }
    });
  };

  return (
    <>
      <View>
        <View style={styles.mainView}>
          <View>
            <Text style={styles.headtxt}>Check Location here.</Text>
          </View>

          <TouchableOpacity onPress={getLoc} style={styles.press}>
            <View>
              <Text style={styles.presstxt}>
                Click here to hide orget longitude and latitude.
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.longlatbox}>
            <Text style={styles.latlongtxt}>
              {latitude}, {longitude}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={getAddress}>
              <Text>Click to see/refresh location.-- {address}</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: '30%'}}>
            <Api />
          </View>

          <View
            style={{
              height: '20%',
              // backgroundColor: 'yellow',
              margin: 10,
              padding: 8,
            }}>
            <View style={{marginBottom: 20, alignItems: 'center'}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>
                {' '}
                API FETCHING USING AXIOS ⬇️⬇️
              </Text>
            </View>
            <App2 />
          </View>
          <View style={{height: '20%', margin: 10, backgroundColor: 'green'}}>
            <Swiperdes />
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginTop: 25,
  },
  headtxt: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 700,
  },
  press: {
    backgroundColor: 'lightgreen',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
    // marginTop: 10,
  },
  presstxt: {
    fontWeight: '600',
  },
  longlatbox: {
    marginVertical: 20,
  },
  latlongtxt: {
    fontSize: 16,
  },
});
