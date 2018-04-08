import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import FolderCard from '../components/FolderCard';
import FolderView from '../components/FolderView';
import NavigationItem from '../components/NavigationItem';

var DOMParser = require('react-native-html-parser').DomParser;
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      setScreenDownloads: false,
    }
  }

  static navigationOptions = {
    title: "Defcon Media",
  };

  _drawerNavigationHandler = () => {
    console.log(this.state.setScreenDownloads)
    if(this.state.setScreenDownloads){
      this.setState({
        setScreenDownloads: false,
      });
    }else{
      this.setState({
        setScreenDownloads: true,
      });
    }
    console.log(this.state.setScreenDownloads)
  }

  render(){
    const { navigate } = this.props.navigation;

    var navigationView = (
      <View>
        <NavigationItem itemTitle="Downloads" onTouch={() => this._drawerNavigationHandler()} ></NavigationItem>
        <NavigationItem itemTitle="File Navigator" onTouch={() => this._drawerNavigationHandler()} ></NavigationItem>
      </View>
    );

    return(
      <View style={{flex: 1,}}>
        <DrawerLayoutAndroid
          drawerWidth={200}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <FolderView />
        </DrawerLayoutAndroid>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  spacer:{
    flex: 10,
  },
});
