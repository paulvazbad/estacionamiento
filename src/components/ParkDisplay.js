import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

class ParkDisplay extends Component {
	state = { numberofCars: 0 };
	refreshNumber() {
		const newNum = this.state.numberofCars + 1;
		this.setState({ numberofCars: newNum });
	}
	reSize() {
		
	}
	render() {
		styles.circularDisplay.height = this.props.size;
		styles.circularDisplay.width = this.props.size;
		styles.circularDisplay.borderRadius = this.props.size / 2;
		styles.circularDisplay.borderColor = this.props.color;
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
		borderWidth: 3,
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
