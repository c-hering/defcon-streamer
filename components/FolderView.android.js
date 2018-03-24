import React from 'react';
import { View,Text, } from 'react-native';
import FolderCard from './FolderCard';

var DomParser = require('react-native-html-parser').DOMParser;
export default class FolderView extends React.Component {
  constructor(props){
    super(props);
  }

  _getURI = URI => {

  }

  render(){
    return(
      <View style={{flex: 1,}}>
        <FolderCard folderName={"Test Folder"} onPress={console.log("Press")}
      </View>
    );
  }
}
