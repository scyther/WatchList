import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import Card from '../components/Card';
import EmptyList from '../components/EmptyList';
const Home = () => {
  const {colors} = useTheme();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = () => {
    setRefreshing(true);
    const storedList = MMKV.getString('movies');
    console.log(storedList);
    if (storedList === undefined) {
      setData([]);
      setRefreshing(false);
    }
    const parsedList = JSON.parse(storedList);
    setData(parsedList);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return <Card image={item.image} name={item.name} />;
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      {console.log(data)}
      <StatusBar
        translucent={true}
        animated={true}
        backgroundColor="#183F66"
        barStyle="light-content"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{backgroundColor: colors.background}}
        ListEmptyComponent={<EmptyList />}
        refreshing={refreshing}
        onRefresh={() => {
          fetchData();
        }}
      />
    </SafeAreaView>
  );
};

export default Home;