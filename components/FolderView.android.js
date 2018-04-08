import React from 'react';
import { View,DrawerLayoutAndroid,ActivityIndicator,ScrollView } from 'react-native';
import FolderCard from './FolderCard';
import FileCard from './FileCard';
import NavigationItem from './NavigationItem';


export default class FolderView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlAddition: '',
      folders: [],
      isLoading: true,
      isListening: false,
      streamURL: '',
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

  _onFilePress = title => {
    //convert urlAddition back to url for audio streaming
    let url = "https://media.defcon.org/"
    url = url + this.state.urlAddition.replace(/&/g,'/') + title
    this.setState({
      isListening: true,
      streamURL: url,
    })
  }

  _onFolderPress = title => {
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

  _renderContent = (title) => {
    if(title.includes('/')){
      return (<FolderCard key={title} folderName={title.length > 30 ? title.substring(0,30) + '...' : title} onTouch={() => this._onFolderPress(title)}/>)
    }else{
      return (<FileCard key={title} folderName={title.length > 50 ? title.substring(0,50) + '...' : title} onTouch={() => this._onFilePress(title)}/>)
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

    var navigationView = (
      <View>
        <NavigationItem itemTitle="Downloads" onTouch={() => console.log('Downloads')} ></NavigationItem>
        <NavigationItem itemTitle="File Navigator" onTouch={() => console.log('File Navigator')} ></NavigationItem>
      </View>
    );

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
          <ActivityIndicator size="large" color="#0000FF"/>
        </View>
      );
    }else{
      if(this.state.isListening){
        return(
          <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
              {this.state.folders.map(title => this._renderContent(title))}
            </ScrollView>
          </DrawerLayoutAndroid>
        );
      }else{
        return(
          <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <ScrollView style={{flex: 1,}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',}}>
              {this.state.folders.map(title => this._renderContent(title))}
            </ScrollView>
          </DrawerLayoutAndroid>
        );
      }
    }
  }
}
