import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, Container, Header, Left, Right, Body, Title, H3, Button, Text, H2 } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import ParkDisplay from './ParkDisplay.js';
import StockLineChartBasic from './StockLineChartBasic.js';

export default class DynamicBackground extends Component {
	state = { color: ['#087f23', '#087f23', '#087f23'], numberofCars: [0, 0, 0] };
  componentWillMount() {
    this.actCarros();
  }
  refreshNumber() {
    const newNum = this.state.numberofCars + 1;
    this.setState({ color: this.state.color, numberofCars: newNum });
  }
  asignColor(carAc) {
    let colAc = '';
     if (carAc > 200) {
      colAc = '#d32f2f';
    } else if (carAc > 140) {
      colAc = '#FDD835';
    } else {
      colAc = '#087f23';
    }
    return colAc;
  }
  calcCarros() {
    let horAct = new Date().getHours();
    horAct -= 9;
    horAct *= 60;
    horAct += new Date().getMinutes();
    let carAc=[0, 0, 0];
    let colAc = ['#087f23', '#087f23', '#087f23'];
    carAc[0] = Math.round((235 / (1 + (235 * Math.exp(-0.235 * (horAct - 10))))));
    carAc[1] = Math.round((235 / (1 + (235 * Math.exp(-0.235 * (horAct))))));
    carAc[2] = Math.round((235 / (1 + (235 * Math.exp(-0.235 * (horAct + 10))))));
    colAc[0] = this.asignColor(carAc[0]);
    colAc[1] = this.asignColor(carAc[1]);
    colAc[2] = this.asignColor(carAc[2]);
   
    this.setState({ color: colAc, numberofCars: carAc });
  }
  actCarros() {
    console.log('Los actualizo perro');
    this.calcCarros();
  }

  render() {
    return (
      <Container>
            <Header style={{ backgroundColor: this.state.color[1] }}>
        <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1 }}>
            <Title>
            EstacionaTEC
            </Title>
          </Body>
        <Right style={{ flex: 1 }} />
        </Header>

        <Content>
          <Grid>

            <Row style={{ height: 200 }} >
              <Col style={styles.section} size={30}>
                <Row size={40} style={styles.section}>
                <H3>-10 min: </H3>
                </Row>
                <Row size={30} style={{ alignItems: 'center' }}>
                <ParkDisplay 
                size={80} color={this.state.color[0]} 
                numberofCars={this.state.numberofCars[0]} 
                textSize={35} 
                />
                </Row>
              </Col>

              <Col size={40}>
                <Row size={15} style={styles.section}>
                </Row>
                <Row style={styles.MiddleSection} size={70}>
                <ParkDisplay 
                size={130} color={this.state.color[1]} 
                numberofCars={this.state.numberofCars[1]} 
                textSize={75} 
                />
                </Row>
              </Col>
              
              <Col style={styles.section} size={30}>
              <Row size={40} style={styles.section}>
                <H3> +10 min: </H3>
              </Row>
              <Row size={30} style={{ alignItems: 'center' }}>
                <ParkDisplay 
                size={80} 
                color={this.state.color[2]} 
                numberofCars={this.state.numberofCars[2]} 
                textSize={35} 
                />
              </Row>
              </Col>

            </Row>

            <Row style={{ justifyContent: 'center' }} >
              <Button rounded bordered dark>
              <TouchableOpacity onPress={() => this.actCarros()}>
                <Text style={{ fontSize: 20 }}> Actualizar </Text>
              </TouchableOpacity> 
              </Button> 
            </Row>
            
            <Row>
            <StockLineChartBasic color={this.state.color[1]} />
            </Row>
          </Grid>
        </Content>

      </Container>
    );
  }
}

const styles = {
  section: {
   flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  MiddleSection: {
   flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
};
