import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import FolderCard from '../components/FolderCard';
import FolderView from '../components/FolderView';

var DOMParser = require('react-native-html-parser').DomParser;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };


  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1,}}>
        <Text>asdf</Text>
        <FolderView />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  spacer:{
    flex: 10,
  },
});
