/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Button from 'react-native-button';
import CheckBox from '@react-native-community/checkbox';

import GoogleSearch from './GoogleSearch';

const WatchedCard = ({item, deleteMovie, markMovie}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.card, {backgroundColor: '#F7CD2E'}]}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.discription}>
        <Text style={[{color: colors.text}, styles.name]}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`http://www.google.com/search?q=${item.name}`);
          }}>
          <GoogleSearch />
        </TouchableOpacity>
        <View style={styles.buttons}>
          <CheckBox
            style={styles.CheckBox}
            disabled={false}
            value={item.watched}
            onValueChange={() => {
              markMovie(item.key);
            }}
          />
          <Button
            style={{fontSize: 16, color: '#FAFAFA'}}
            styleDisabled={{color: 'red'}}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              deleteMovie(item.key);
            }}>
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    borderWidth: 2,
    borderColor: 'black',
  },
  CheckBox: {
    backgroundColor: '#03203C',
  },
});

export default WatchedCard;
