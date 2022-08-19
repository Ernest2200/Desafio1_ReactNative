import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import React, { Component } from 'react';

export default class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {Name: this.props.route.params.NameMovie,
                  Image: this.props.route.params.ImageMovie,
                  Description: this.props.route.params.MovieDesc
    };

  }
  
render(){
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{this.state.Name}</Text>
      <Avatar style={styles.banner} source={{uri:this.state.Image}} ></Avatar>
      <Text style={styles.Description}>{this.state.Description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height:250,
    width:250
  },
  Title: {
    fontSize:25,
    marginBottom: 80,
    color:'#fff'
  },
  Description: {
    marginTop:20,
    fontSize:15,
    padding:10,
    textAlign:'justify',
    color:'#fff'
  }
});
