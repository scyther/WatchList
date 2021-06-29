/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Button from 'react-native-button';
import GoogleSearch from './GoogleSearch';

const Card = ({image, name}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.card, {backgroundColor: colors.card}]}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.discription}>
        <Text style={[{color: colors.text}, styles.name]}>{name}</Text>
        <GoogleSearch />
        <View style={styles.buttons}>
          <Button
            style={{fontSize: 16, color: '#FAFAFA'}}
            styleDisabled={{color: 'red'}}
            containerStyle={[
              styles.buttonContainer,
              {backgroundColor: 'green'},
            ]}
            onPress={() => this._handlePress()}>
            Mark as Done
          </Button>
          <Button
            style={{fontSize: 16, color: '#FAFAFA'}}
            styleDisabled={{color: 'red'}}
            containerStyle={styles.buttonContainer}
            onPress={() => this._handlePress()}>
            Delete
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    marginHorizontal: 4,
    marginBottom: 8,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    flex: 1,
  },
  name: {
    fontFamily: 'Oswald-Medium',
    fontSize: 20,
  },
  discription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 3,
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 15,
    borderRadius: 4,
  },
});

export default Card;
