import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default App;
