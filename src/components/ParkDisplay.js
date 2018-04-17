import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

class ParkDisplay extends Component {
	state = { numberofCars: 0 };
	refreshNumber() {
		const newNum = this.state.numberofCars + 1;
		this.setState({ numberofCars: newNum });
	}
	render() {
		return (
			<View>
			<Button style={styles.circularDisplay} onPress={() => this.refreshNumber()} >
				<Text> {this.state.numberofCars} </Text>
			</Button>
			</View>
		);
	}
}

const styles = {
	circularDisplay: {
		height: 70,
		width: 70,
		bottom: 8,
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 35,
		backgroundColor: '#f5f5f5',
		justifyContent: 'space-around',
		alignItems: 'center',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5
	}
};
export default ParkDisplay;
