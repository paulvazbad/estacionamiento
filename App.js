import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Expo from 'expo';
import { Container, Footer, Button, FooterTab } from 'native-base';
import { Row } from 'react-native-easy-grid';
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
    else {
      return (
        <View>
          <Text>Font loading </Text>
        </View>
      );
    }
  }
}
