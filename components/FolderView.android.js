import React from 'react';
import { View,Text,FlatList,ScrollView } from 'react-native';
import FolderCard from './FolderCard';

var tabletojson = require('tabletojson');

export default class FolderView extends React.Component {
  constructor(props){
    super(props);
  }

  _getURI = URI => {

  }

  render(){
    return(
      <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
          <FolderCard folderName={"Test Folder"} onPress={console.log("Press")} />
      </ScrollView>
    );
  }
}
