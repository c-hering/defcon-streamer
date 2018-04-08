import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class NavigationItem extends React.Component{

  render(){
    return(
      <TouchableOpacity style={styles.container}>
        <View style={{flex: 1,}}>
          <Text>{this.props.itemTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

var styles = new StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    elevation: 3,
    marginTop: 2,
    marginLeft: 5,
    marginBottom: 5,
    padding: 10,
  },
});
