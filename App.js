import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import {Container, Header, Content, Right, Left } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import DynamicBackground from './src/components/DynamicBackground.js';

export default class App extends Component {

  state = {fontLoaded:false}
  async componentWillMount() {
    //Namas para que no ande enfadando 
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontLoaded:true})
  }

  render() {
    if(this.state.fontLoaded){
      return (
      <Container>
        <DynamicBackground>
        
        <Row size={50}>
        <Text> Aqui va el numero de carros actuales en grande </Text>
        </Row>
        
        <Row size={50}>
        </Row>

        </DynamicBackground>
      </Container>
      );
    }
    else{
      return(
        <View>
          <Text>Font loading  </Text>
        </View>
      );
    }
  }
}


