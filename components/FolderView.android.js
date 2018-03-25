import React from 'react';
import { View,Text,FlatList,ScrollView } from 'react-native';
import FolderCard from './FolderCard';


export default class FolderView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folders: []
    }
  }

  _getURI = addition => {
    //make rest call
    for(i in table){
      for(x in table[i]){
        folders.push(table[i][x].file_name___)
      }
    }
    this.setState(folders: folders)
  }


  render(){
    return(
      <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
      </ScrollView>
    );
  }
}
