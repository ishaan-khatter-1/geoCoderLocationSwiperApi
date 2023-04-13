import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App2 = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(
      'http://www.themealdb.com/api/json/v1/1/categories.php',
    );
    // const resJson = await res.json();
    console.log(res.data.categories);
    setFood(res.data.categories);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={{height: 90, width: 90, marginRight: 10, borderRadius: 50}}
          source={{uri: item.strCategoryThumb}}
        />
      </View>
    );
  };
  return (
    <View>
      {/* <Text>App2</Text> */}
      <FlatList data={food} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

export default App2;
