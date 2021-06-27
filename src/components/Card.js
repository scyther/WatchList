import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Card = ({image, name}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.card, {backgroundColor: colors.card}]}>
      <Image style={styles.image} source={{src: image}} />
      <View style={styles.discription}>
        <Text style={[{color: colors.text}, styles.name]}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    borderColor: '#183F66',
    borderWidth: 3,
    borderRadius: 20,
    margin: 12,
    padding: 10,
    flexDirection: 'row',
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
    flex: 2,
    textAlign: 'center',
  },
});

export default Card;
