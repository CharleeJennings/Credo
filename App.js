import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './components/Navigation'

export default function App() {
  return (
 
      <TabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
