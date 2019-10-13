import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import Quote from './Quote'
import Settings from './Settings'






const TabNavigator = createBottomTabNavigator({
    Home: Quote,
    Settings: Settings,
  });
  


export default createAppContainer(TabNavigator);