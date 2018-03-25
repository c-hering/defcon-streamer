import React from 'react';
import { View,Text,FlatList,ScrollView } from 'react-native';
import FolderCard from './FolderCard';

var tabletojson = require('../tabletojson');

export default class FolderView extends React.Component {
  constructor(props){
    super(props);
  }

  _getURI = () => {
    var url = "https://media.defcon.org";
    var folders = [];
    return new Promise(tabletojson.convertUrl(url))
  }


  render(){
    return(
      <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
        {
          this._getURI().then(table => {
            table = JSON.parse(JSON.stringify(table).replace(/\s|↓/gi,"_").toLowerCase());
            for(i in table){
              for(x in table[i]){
                folders.push(table[i][x].file_name___)
              }
            }
            return folders.map(title => {return (
              <FolderCard folderName={title} onPress={console.log("press")}/>
            )})
          })
        }
      </ScrollView>
    );
  }
}
