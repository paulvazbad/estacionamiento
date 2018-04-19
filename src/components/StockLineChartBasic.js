import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory-native';

class StockLineChartBasic extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return ({ color: nextProps.color });
    }
    return null;          
  }
  state= { color: this.props.color };
  render() {
    return (
      <View style={styles.container}>
      <VictoryChart
    theme={VictoryTheme.material}
      >
    <VictoryLine
      style={{
        data: { stroke: this.state.color },
        parent: { border: '1px solid #ccc' },
      }}
      data={[
        {x:-40,y:0.0},
        {x:-30,y:0.0},
        {x:-20,y:0.0},
        {x:-10,y:0.0},
        { x: -5, y:0.0},
        { x: 0, y: 0.3084136 },
        { x: 5, y: 3.19412 },
        { x: 10, y: 10.03769 },
        { x: 20, y: 74.90302 },
        {x:30,y:195.20848},
        {x:35,y:221.08283},
        {x:40,y:230.518681},
        {x:45,y:233.597599},
        {x:50,y:234.56511},
        {x:60,y:235},
        {x:100,y:235},
      ]}
      domain={{ x: [-50, 100], y: [0, 235] }}
    />
  </VictoryChart>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default StockLineChartBasic;
