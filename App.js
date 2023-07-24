import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IntroScreen from './src/screens/IntroScreen';
import GPAcalculator2 from './src/components/GPAcalculator2';
import GPAcalculator from './src/screens/GPAcaculator';
import { NavigationContainer } from '@react-navigation/native';
import {Entypo, FontAwesome} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  
  
  return (
    <>
    {/* <StatusBar backgroundColor='white' /> */}
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#2096F3'
    }}>
      <Tab.Screen name="Home" component={IntroScreen} options = {{headerTitle: 'University of Makeni',headerTitleStyle: {color: 'white'},headerStyle : {
        backgroundColor: '#2096F3',
        
      },
        headerTitleAlign: 'center',
        tabBarIcon: () => <Entypo name = 'home' size={24} color = 'black' />
      }} />
      <Tab.Screen name="Year 1 and 2" component={GPAcalculator2} options = {{headerTitleStyle: {color: 'white'},headerStyle : {
        backgroundColor: '#2096F3'
      },
        headerTitleAlign: 'center',
        tabBarIcon: () => <FontAwesome name="calculator" size={24} color="black" />
      }} />
      <Tab.Screen name="Year 3 and 4" component={GPAcalculator} options = {{headerTitleStyle: {color: 'white'},headerStyle : {
        backgroundColor: '#2096F3'
      },
        headerTitleAlign: 'center',
        tabBarIcon: () => <FontAwesome name="calculator" size={24} color="black" />
      }} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

