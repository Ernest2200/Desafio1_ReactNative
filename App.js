import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,MaterialIcons} from "@expo/vector-icons";

import Home from './Components/Home';
import MoviesNavigation from './Navigation/MoviesNavigation';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Inicio' 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="video-camera" color={color} size={size} />
          ),
        }} component={Home}/>
        
        <Tab.Screen name='Peliculas' 
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
        }}
        component={MoviesNavigation}/>
      </Tab.Navigator>
    </NavigationContainer>
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
