import React from 'react';
import { View,Text,FlatList,ScrollView } from 'react-native';
import FolderCard from './FolderCard';

var tabletojson = require('../tabletojson');

export default class FolderView extends React.Component {
  constructor(props){
    super(props);
    this._getURI("")
    this.state = {
      folders: []
    }
  }

  _getURI = addition => {
    var url = "https://media.defcon.org" + addition;
    var folders = [];
    tabletojson.convertUrl(url).then(table => {
      table = JSON.parse(JSON.stringify(table).replace(/\s|↓/gi,"_").toLowerCase());
      for(i in table){
        for(x in table[i]){
          folders.push(table[i][x].file_name___)
        }
      }
      this.setState(folders: folders)
    })
  }


  render(){
    return(
      <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
        {this.state.folders === [] ? (<Text>Nuthin Here</Text>) : this.state.folders.map(title => (<FolderCard folderName={title} onPress={console.log("press")}/>))}
      </ScrollView>
    );
  }
}
