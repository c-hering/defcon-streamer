import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import FolderCard from '../components/FolderCard';
import FolderView from '../components/FolderView';

var DOMParser = require('react-native-html-parser').DomParser;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _openFolder = () => {};
  _parse = response => {
    let doc =  new DOMParser().parseFromString('<td></td>');
    return doc;
  }
  _getURI = URI => {
    console.log("Clicked");
    fetch(URI,{ method: 'GET', }).then((response) => response.json()).then((responseJSON) => console.log(responseJSON));
  }
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
