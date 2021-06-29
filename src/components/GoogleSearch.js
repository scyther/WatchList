/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';

const GoogleSearch = () => {
  return (
    <View
      style={{
        backgroundColor: '#FAFAFA',
        borderRadius: 2,
        padding: 4,
        margin: 5,
      }}>
      <Image
        style={{width: 25, height: 25}}
        source={require('../assets/image/Google.png')}
      />
    </View>
  );
};

export default GoogleSearch;
