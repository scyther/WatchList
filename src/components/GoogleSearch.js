/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

const GoogleSearch = () => {
  return (
    <View
      style={{
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 4,
        margin: 2,
        flexDirection: 'row',
        borderWidth: 2,
        marginBottom: 8,
      }}>
      <Image
        style={{width: 15, height: 15}}
        source={require('../assets/image/Google.png')}
      />
      <Text style={{fontSize: 12}}>Search</Text>
    </View>
  );
};

export default GoogleSearch;
