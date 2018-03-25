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
    console.log("URL: " + url)
    fetch(url,{method: 'GET',})
      .then(response => {
        if(response.ok){
          response.json().then(json => {
            let folders = []
            for(i in json){
              for(x in json[i]){
                folders.push(json[i][x].file_name___)
              }
            }
            this.setState({
              folders: folders,
              isLoading: false,
            });
          });
        }
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
          {this.state.folders.map(title => (<FolderCard folderName={title} onPress={console.log("Press")}/>))}
        </ScrollView>
      );
    }
  }
}
