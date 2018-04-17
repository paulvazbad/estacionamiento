import React, { Component } from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { Content, Container, Header, Left, Right, Body, Title, Footer, FooterTab, Button } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import ParkDisplay from './ParkDisplay.js';

export default class DynamicBackground extends Component {
	state = { color: '#087f23', numberofCars: 0 };
  refreshNumber() {
    const newNum = this.state.numberofCars + 1;
    this.setState({ color: this.state.color, numberofCars: newNum });
  }

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
              <Col style={styles.LeftSection}>
                <ParkDisplay size={50} color={this.state.color} numberofCars={0} />
              </Col>

              <Col>
                <Row>
                </Row>
                <Row style={styles.MiddleSection}>
                <ParkDisplay size={120} color={this.state.color} numberofCars={0} />
                </Row>
              </Col>
              
              <Col style={styles.RightSection}>
                <ParkDisplay size={50} color={this.state.color} numberofCars={0} />
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
  RightSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#435DA7'

  },
  LeftSection: {
   flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#9fa8da'
  },
  MiddleSection: {
   flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
};
