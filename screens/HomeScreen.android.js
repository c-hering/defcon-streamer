import React from 'react';
import { Text, View, } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
