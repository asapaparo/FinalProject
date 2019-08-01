import React, { Component } from 'react';
import {Alert, Image, sAppRegistry, Button, StyleSheet, View} from 'react-native';
import Vikavolt from './vikavolt.js';
export default class ButtonBasics extends Component {
  _onPressButton(){
    <Vikavolt />
  }
  render(){
    return(

      <View style = {styles.container}>
        <View style = {styles.buttonContainer}>
          <Button
            onPress = {this._onPressButton}
            title = "press me!"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
});
