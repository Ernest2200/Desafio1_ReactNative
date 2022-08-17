import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Details extends Component {
 
  constructor(props) {
    super(props);
    this.state = {Name: this.props.route.params.NameMovie
    };

  }
  
render(){
  return (
    <View style={styles.container}>
      <Text>{this.state.Name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
