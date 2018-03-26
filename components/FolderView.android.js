import React from 'react';
import { View,ActivityIndicator,ScrollView } from 'react-native';
import FolderCard from './FolderCard';


export default class FolderView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlAddition: '',
      folders: [],
      isLoading: true,
    }
  }

  _getURL = () => {
    var url = 'https://defcon-api.herokuapp.com/parseurl/' + this.state.urlAddition;
    // console.log(url)
    fetch(url,{method: 'GET',})
      .then(response => {
        if(response.ok){
          response.json().then(json => {
            let folders = []
            for(i in json){
              for(x in json[i]){
                folders.push(json[i][x].File_Name___.replace(/_/g,' '))
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

  _onPress = title => {
    if(title === 'Parent directory/' && !this.state.urlAddition.includes('&')){
      this.setState({
        urlAddition: '',
      })
    }else if(title === 'Parent directory/' && this.state.urlAddition.includes('&')){
      let url = this.state.urlAddition.substring(0,this.state.urlAddition.indexOf('&'))
      this.setState({
        urlAddition: url,
      })
    }else{
      let url;
      this.state.urlAddition.length >= 2 ? url = this.state.urlAddition.slice(0,-1) + "&" + title : url = this.state.urlAddition + title
      this.setState({
        urlAddition: url,
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    // console.log(this.state.urlAddition)
    if(prevState.urlAddition !== this.state.urlAddition){
      this.setState({isLoading: true,})
      this._getURL()
    }
  }

  componentWillMount(){
    this._getURL()
    // console.log('mount')
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
          {this.state.folders.map(title => (<FolderCard key={title} folderName={title} onTouch={() => this._onPress(title)}/>))}
        </ScrollView>
      );
    }
  }
}
