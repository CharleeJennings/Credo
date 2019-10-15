import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Quote from './Quote'
import Settings from './Settings'
import About from './About'
import Connect from './Connect'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Quote,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color="#d68a27" />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon: ({ tintColor }) => (
            <Icon name="settings-outline" size={30} color="#d68a27" />
            )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel:"About",
            tabBarIcon: ({ tintColor }) => (
            <Icon name="information" size={30} color="#d68a27" />
            )
        }
    },
    Connect: {
        screen: Connect,
        navigationOptions: {
            tabBarLabel:"Connect",
            tabBarIcon: ({ tintColor }) => (
            <Icon name="account-group" size={30} color="#d68a27" />
            )
        }
    }
},{
    tabBarOptions: {
      activeTintColor: '#d68a27',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
});

const StackNavigator = createStackNavigator({
    AppAnchor: {
        screen: TabNavigator,
        navigationOptions: { title: 'Credo' },
    }
},{
    headerLayoutPreset: 'center'
});
  
export default createAppContainer(StackNavigator);