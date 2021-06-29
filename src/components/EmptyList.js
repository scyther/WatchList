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
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Oswald-Regular',
    fontWeight: '900',
  },
});

export default EmptyList;
