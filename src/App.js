import 'react-native-gesture-handler';

import React from 'react';
import {TouchableOpacity, useColorScheme, Text, StyleSheet} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Home from './screens/Home';
import Logo from './components/Logo';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Add from './screens/Add';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const LightTheme = {
    dark: false,
    colors: {
      primary: '#1292B4',
      background: Colors.lighter,
      card: Colors.light,
      text: '#000',
      border: '#444',
      notification: '#222',
    },
  };

  const DarkTheme = {
    dark: true,
    colors: {
      primary: '#03203C',
      background: Colors.darker,
      card: 'black',
      text: '#ecf0f1',
      border: '#95a5a6',
      notification: '#222',
    },
  };
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   barStyle: isDarkMode ? 'light-content' : 'dark-content',
  // };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#183F66',
              borderBottomWidth: 0.1,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Text style={styles.addButton}>+</Text>
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Logo />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#183F66',
              borderBottomWidth: 0.1,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Text style={styles.addButton}>+</Text>
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Logo />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  addButton: {
    fontSize: 40,
    marginTop: -7,
    fontWeight: 'bold',
    fontFamily: 'Caveat-Regular',
    color: '#f3f3f3',
    marginRight: 15,
  },
});

export default App;
