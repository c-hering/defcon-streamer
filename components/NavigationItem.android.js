import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class NavigationItem extends React.Component{

  render(){
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onTouch}>
        <View style={{flex: 1,}}>
          <Text>{this.props.itemTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

var styles = new StyleSheet.create({
  container: {
    width: '95%',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
    padding: 10,
  },
});
