import React from 'react';
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native';

export default class FolderCard extends React.Component {
  render(){
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={{flex: 5, paddingLeft: 20, justifyContent: 'center',}}>
          <Text style={{fontSize: 20, color: '#757575',}}>{this.props.folderName}</Text>
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
    padding: 10,
  },
});
