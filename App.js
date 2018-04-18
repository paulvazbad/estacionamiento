import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Expo from 'expo';
import DynamicBackground from './src/components/DynamicBackground.js';

export default class App extends Component {

  state = { fontLoaded: false }
  async componentWillMount() {
    //Namas para que no ande enfadando
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),});
    
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <DynamicBackground />
      );
    } 
    return (
      <View>
        <Text>Font loading </Text>
      </View>
    );
  }
}
