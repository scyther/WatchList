import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {GSEARCH_API_KEY, CX} from '@env';
import SearchCard from '../components/SearchCard';

const Add = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const {colors} = useTheme();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchMovie = () => {
    if (query === '') {
      return setShowAlert(true);
    } else {
      setLoading(true);
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GSEARCH_API_KEY}&cx=${CX}&q=${query}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(responseData => {
          if (responseData.items) {
            return setData(responseData.items);
          }
          return setShowAlert2(true);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  const renderItem = ({item}) => <SearchCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder="Search Movie"
        placeholderTextColor={colors.text}
        style={[styles.input, {borderColor: colors.border, color: colors.text}]}
        returnKeyLabel="Go"
        onSubmitEditing={() => {
          searchMovie();
        }}
        clearButtonMode="always"
        enablesReturnKeyAutomatically={true}
      />
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.cacheId}
        />
      )}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Search Box Empty"
        message="Enter Something"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        onDismiss={() => {
          setShowAlert(false);
        }}
      />
      <AwesomeAlert
        show={showAlert2}
        showProgress={false}
        title="Nothing Found"
        message="No Movie Found"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        onDismiss={() => {
          setShowAlert2(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderRadius: 10,
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
export default Add;
