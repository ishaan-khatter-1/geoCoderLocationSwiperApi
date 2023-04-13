import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Swiperdes = () => {
  return (
    <View>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          {/* <Text style={styles.text}>Hello Swiper</Text> */}
          <Image
            source={require('./assets/images/img5.jpg')}
            style={{height: 100, width: 160}}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require('./assets/images/img6.jpg')}
            style={{height: 100, width: 160}}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={require('./assets/images/img7.jpg')}
            style={{height: 100, width: 160}}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Swiperdes;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
