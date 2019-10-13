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



/*     
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; // Version can be specified in package.json
import { createAppContainer, StackActions, NavigationActions  } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

*/

/*
export default createAppContainer(AppNavigator);
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{
              flex: 1, 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>



      <View style={styles.buttonContainer}>
        <Button
          onPress={ButtonBasics._onPressButton}
          title="Press Me"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={ButtonBasics._onPressButton}
          title="Press Me"
          color="#841584"
        />
      </View>

      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          onPress={ButtonBasics._onPressButton}
          title="This looks great!"
        />
        <Button
          onPress={ButtonBasics._onPressButton}
          title="OK!"
          color="#841584"
        />
      </View>








    </View>

    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});

class ButtonBasics extends Component {
  _onPressButton(){
    alert('You Tapped the Button!')
  }
}





class FlexDirectionBasics extends Component{
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

*/