import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import Quote from './Quote'
import Settings from './Settings'
import About from './About'
import Connect from './Connect'

const TabNavigator = createBottomTabNavigator({
    Home: Quote,
    Settings: Settings,
    About: About,
    Connect: Connect
  });
  
export default createAppContainer(TabNavigator);