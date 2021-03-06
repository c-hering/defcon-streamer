import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export default class FolderCard extends React.Component {
  render(){
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onTouch}>
        <Image source={require('../icons/ic_folder_black_24dp.png')} style={{width: 20, height: 20, marginLeft: 0, paddingLeft: 0,}}/>
        <View style={{flex: 5, flexDirection: 'row', paddingLeft: 20,}}>
          <Text style={{fontSize: 15, color: '#000000', marginLeft: 10, marginRight: 5,}}>{this.props.folderName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


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
