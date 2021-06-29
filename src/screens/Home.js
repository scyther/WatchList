/* eslint-disable react-native/no-inline-styles */
import {useIsFocused, useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import Card from '../components/Card';
import WatchedCard from '../components/WatchedCard';
import EmptyList from '../components/EmptyList';
const Home = () => {
  const isFocused = useIsFocused();
  const {colors} = useTheme();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshList, setRefreshList] = useState(false);
  const fetchData = () => {
    // MMKV.delete('movies');
    setRefreshing(true);
    const storedList = MMKV.getString('movies');
    // console.log(storedList);
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      setData(parsedList);
      setRefreshing(false);
    } else {
      setData([]);
      setRefreshing(false);
    }
  };

  const deleteMovie = key => {
    // const storedList = MMKV.getString('movies');
    // const parsedList = JSON.parse(storedList);
    const parsedList = data;
    const newList = parsedList.filter(listItem => listItem.key !== key);
    console.log(newList);
    MMKV.set('movies', JSON.stringify(newList));
    setRefreshList(!refreshList);
  };

  const markMovie = key => {
    const parsedList = data;
    // const storedList = MMKV.getString('movies');
    // const parsedList = JSON.parse(storedList);
    const newList = parsedList.map(item => {
      if (item.key === key) {
        item.watched = !item.watched;
      }
      return item;
    });
    console.log(newList);
    const markedItemArray = newList.filter(listItem => listItem.key === key);
    const markedItem = markedItemArray[0];
    console.log(markedItem);
    const removeMarkedItem = newList.filter(listItem => listItem.key !== key);
    console.log(removeMarkedItem);

    const pushMarkedItem = removeMarkedItem.push(markedItem);
    console.log(pushMarkedItem);
    MMKV.set('movies', JSON.stringify(removeMarkedItem));
    setRefreshList(!refreshList);
  };

  useEffect(() => {
    fetchData();
  }, [refreshList, isFocused]);

  const renderItem = ({item}) => {
    return !item.watched ? (
      <Card item={item} deleteMovie={deleteMovie} markMovie={markMovie} />
    ) : (
      <WatchedCard
        item={item}
        deleteMovie={deleteMovie}
        markMovie={markMovie}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        animated={true}
        backgroundColor="#183F66"
        barStyle="light-content"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        style={{backgroundColor: colors.background, padding: 9}}
        ListEmptyComponent={<EmptyList />}
        extraData={data}
        refreshing={refreshing}
        onRefresh={() => {
          fetchData();
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
