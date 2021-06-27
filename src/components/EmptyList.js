import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing To Watch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Oswald-Regular',
  },
});

export default EmptyList;
