import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Header, Body, Right, Left, Title, Content } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import MainHeader from './MainHeader.js';

export default class DynamicBackground extends Component {
	state = {color:'#087f23'}
  render() {
    return (
    	<View>
        <MainHeader color={this.state.color}>
          EstacionaTEC
        </MainHeader>
        <Content>
          <Grid style={{backgroundColor: this.state.color}}>
          {this.props.children}
          </Grid>
        </Content>
        </View>
    );
  }
}
