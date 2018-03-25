import React from 'react';
import { View,ActivityIndicator,ScrollView } from 'react-native';
import FolderCard from './FolderCard';


export default class FolderView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      isLoading: true,
    }
  }

  _getURL = addition => {
    var url = 'https://defcon-api.herokuapp.com/parseurl/' + addition;
    fetch(url,{method: 'GET',})
      .then(response => {
      let folders = []
      for(i in table){
        for(x in table[i]){
          folders.push(table[i][x].file_name___)
        }
      }
      console.log("asdfasd")
      console.log(folders)
      this.setState({
        folders: folders,
        isLoading: false,
      });
    })
  }

  componentWillMount(){
    this._getURL("")
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      );
    }else{
      return(
        <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
        </ScrollView>
      );
    }
  }
}
