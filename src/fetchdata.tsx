import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
// import './assets/images';

const Api = () => {
  // const imgs = [
  //   {
  //     image: () => <Image source={require('./assets/images/img1.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img2.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img3.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img4.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img5.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img6.jpg')} />,
  //   },
  //   {
  //     image: () => <Image source={require('./assets/images/img7.jpg')} />,
  //   },
  // ];

  const imgs = [
    {
      image:
        'https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image:
        'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image:
        'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image:
        'https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const renderimgs = ({item}) => {
    return (
      <View>
        <Image
          style={{height: 100, width: 120, margin: 10}}
          // source={require(item.image)}
          source={{uri: item.image}}
          // source={require(item.image())}
        />
      </View>
    );
  };
  return (
    <View>
      {/* <Text>Api</Text> */}
      <FlatList data={imgs} renderItem={renderimgs} horizontal={true} />
    </View>
  );
};

export default Api;

// const imgs = [
//   {
//     image: './assets/images/img1.jpg',
//   },
//   {
//     image: './assets/images/img2.jpg',
//   },
//   {
//     image: './assets/images/img3.jpg',
//   },
//   {
//     image: './assets/images/img4.jpg',
//   },
//   {
//     image: './assets/images/img5.jpg',
//   },
//   {
//     image: './assets/images/img6.jpg',
//   },
//   {
//     image: './assets/images/img7.jpg',
//   },
// ];
