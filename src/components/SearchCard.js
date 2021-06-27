import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button';

//storage
import {MMKV} from 'react-native-mmkv';

const SearchCard = ({item}) => {
  const {colors} = useTheme();
  let obj = item?.pagemap?.metatags[0];
  let obj2 = item.pagemap?.cse_thumbnail[0];
  const data = {
    key: Date.now(),
    name: item.title,
    link: item.link,
    watched: false,
    image: obj2.src,
  };
  const handleAdd = () => {
    const oldList = MMKV.getString('movies');
    const parsedOldList = JSON.parse(oldList);
    if (!parsedOldList) {
      MMKV.set('movies', JSON.stringify([data]));
    }
    parsedOldList.push(data);
    MMKV.set('movies', JSON.stringify(parsedOldList));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(item.link);
      }}>
      <View
        style={[
          styles.card,
          {backgroundColor: colors.card, borderColor: colors.text},
        ]}>
        <Image source={{uri: obj2.src}} style={styles.thumbnail} />
        <View style={styles.col1}>
          <Text style={[styles.site, {color: colors.text}]}>
            {obj['og:site_name']}
          </Text>
          <Text style={[styles.site, {color: colors.text}]}>{item.title}</Text>
          <Button
            style={[styles.button, {color: colors.text}]}
            containerStyle={[
              styles.buttonContainer,
              {borderColor: colors.border},
            ]}
            onPress={() => {
              handleAdd();
            }}>
            Add to watchList
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    borderColor: '#183F66',
    borderWidth: 2,
    borderRadius: 20,
    margin: 12,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  site: {
    fontWeight: 'bold',
  },
  thumbnail: {
    height: 100,
    width: 50,
    borderRadius: 20,
    flex: 1,
  },
  button: {
    fontSize: 15,
    color: '#242B2E',
  },
  buttonContainer: {
    padding: 8,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#E07C24',
    borderWidth: 2,
    marginTop: 10,
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
export default SearchCard;
