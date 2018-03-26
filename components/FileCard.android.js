import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export default class FileCard extends React.Component {
  render(){
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onTouch}>
        <View style={{flex: 5, flexDirection: 'row', paddingLeft: 20,}}>
          <Text style={{fontSize: 15, color: '#000000',}}>{this.props.folderName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = new StyleSheet.create({
  container: {
    width: '48%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    elevation: 3,
    marginTop: 2,
    marginLeft: 5,
    marginBottom: 5,
    padding: 10,
  },
});
