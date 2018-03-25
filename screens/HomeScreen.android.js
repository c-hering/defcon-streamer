import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import FolderCard from '../components/FolderCard';
import FolderView from '../components/FolderView';

var DOMParser = require('react-native-html-parser').DomParser;
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: "Defcon Media",
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1,}}>
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
