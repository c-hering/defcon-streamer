import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import FolderCard from '../components/FolderCard';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _openFolder = () => {};

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1,}}>
        <FolderCard folderName="Test Folder" onPress={this._openFolder}/>
        <View style={styles.spacer}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  spacer:{
    flex: 10,
  },
});
