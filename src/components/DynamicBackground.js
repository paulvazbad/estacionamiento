import React, { Component } from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { Content, Container, Header, Left, Right, Body, Title, Footer, FooterTab, Button } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import ParkDisplay from './ParkDisplay.js'

export default class DynamicBackground extends Component {
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
          <Grid>
            <Row style={{ backgroundColor: '#635DB7', height: 300 }} >
            <Col style={{ backgroundColor: '#125DD7' }}>
              <ParkDisplay size={30} color={this.state.color} />
            </Col>
            <Col style={{ backgroundColor: '#935DB7' }}>
              <ParkDisplay size={100} color={this.state.color} />
            </Col>
            <Col style={{ backgroundColor: '#435DA7' }}>
              <ParkDisplay size={30} color={this.state.color} />
            </Col>
            </Row>
            <Row style={{ backgroundColor: '#00CE9F', height: 300 }}></Row>
          </Grid>
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
