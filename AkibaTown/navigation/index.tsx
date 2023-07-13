import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import NewPostscreen from '../containers/Newpost';
import TeamsScreen from '../containers/TeamsScreen';
import NewsScreen from '../screens/NewsScreen';
import ForumScreen from '../screens/ForumScreen';

export const Stack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width: 70,
      height : 70,
      borderRadius: 35,
      backgroundColor: '#ffffff'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);
 
export const Tabs = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor:'#ffffff',
        borderRadius: 15,
        height: 90,
        ...styles.shadow
      }
    }}
    >
      <Tab.Screen name="Accueil" component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent:'center'}}>
            <Image
            source={require('../assets/images/icons/home.png')}
            resizeMode = 'contain'
            style={{
              width : 25,
              height : 25,
            }}
            />
            <Text style ={{ color: focused? '#e32f45' : '#748c94', fontSize: 12 }}>
              Home
            </Text>
          </View>
        )
      }} />

      <Tab.Screen name="Forum" component={ForumScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent:'center'}}>
            <Image
            source={require('../assets/images/icons/forum.png')}
            resizeMode = 'contain'
            style={{
              width : 25,
              height : 25,
            }}
            />
            <Text style ={{ color: focused? '#e32f45' : '#748c94', fontSize: 12 }}>
              Forum
            </Text>
          </View>
        ), headerShown: false,
      }} />

      <Tab.Screen name="Nouveau Sujet" component={NewPostscreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Image 
            source = {require('../assets/images/icons/add.png')}
            resizeMode = 'contain'
            style ={{
              width : 30,
              height : 30,
            }}
          />
        ), headerShown: false,
        tabBarButton: (props) => (
          <CustomTabBarButton {...props}/>
        )
      }}
      />

      <Tab.Screen name="Actualités" component={NewsScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent:'center'}}>
            <Image
            source={require('../assets/images/icons/news.png')}
            resizeMode = 'contain'
            style={{
              width : 25,
              height : 25,
            }}
            />
            <Text style ={{ color: focused? '#e32f45' : '#748c94', fontSize: 12 }}>
              Actualités
            </Text>
          </View>
        ), headerShown: false,
      }} />
      <Tab.Screen name="Équipes" component={TeamsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent:'center'}}>
            <Image
            source={require('../assets/images/icons/team.png')}
            resizeMode = 'contain'
            style={{
              width : 25,
              height : 25,
            }}
            />
            <Text style ={{ color: focused? '#e32f45' : '#748c94', fontSize: 12 }}>
              Équipes
            </Text>
          </View>
        ), headerShown: false,
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:5,
  }
})