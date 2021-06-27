import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/image/WatchListLogo.png')}
      />
      <Text style={styles.text}>WatchList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {width: 40, height: 40},
  container: {flexDirection: 'row'},
  text: {fontSize: 30, color: 'white', fontFamily: 'YanoneKaffeesatz-Bold'},
});

export default Logo;
