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
