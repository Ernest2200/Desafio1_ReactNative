import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import List from '../Components/List';
import Details from '../Components/Details';

const Stack=createNativeStackNavigator();

export default function MoviesNavigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen name='List' component={List}/>
    <Stack.Screen name='Details' component={Details}/>
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
