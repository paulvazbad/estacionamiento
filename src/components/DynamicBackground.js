import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import { Content, Container, Header, Left, Right, Body, Title, Footer, FooterTab, Button } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import ParkDisplay from './ParkDisplay.js'

export default class DynamicBackground extends Component {
  constructor(props) {
    super(props);
  }
	state = { color: '#087f23' };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: this.state.color }}>
        <Left />
          <Body>
            <Title>
            EstacionaTEC
            </Title>
          </Body>
        <Right />
        </Header>

        <Content>
        <View style={styles.section}>
          <View style={styles.section}>
            <ParkDisplay />
          </ View>
          <View style={styles.section}>
            <ParkDisplay />
          </ View>
          

        </View>
        </Content>
        </Container>
    );
  }
}

const styles = {
  section: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  }
};
