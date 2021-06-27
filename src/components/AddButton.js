import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import Button from 'react-native-button';

const AddButton = () => {
  const {colors} = useTheme();
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <Button
      containerStyle={[styles.containerStyle]}
      style={[styles.addButton]}
      onPress={() => {
        createTwoButtonAlert();
      }}>
      +
    </Button>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 80,
    marginRight: 10,
    height: 42,
    paddingHorizontal: 10,
  },
  addButton: {
    fontSize: 40,
    marginTop: -7,
    fontWeight: 'bold',
    fontFamily: 'Caveat-Regular',
    color: '#f3f3f3',
  },
});

export default AddButton;
