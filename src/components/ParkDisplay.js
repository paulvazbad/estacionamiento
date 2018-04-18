import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { H1 } from 'native-base';

class ParkDisplay extends Component {
	state = { numberofCars: this.props.numberofCars };
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.numberofCars !== prevState.numberofCars) {
			return ({ numberofCars: nextProps.numberofCars });
		}
		return null;					
	}

	render() {
		styles.circularDisplay.height = this.props.size;
		styles.circularDisplay.width = this.props.size;
		styles.circularDisplay.borderRadius = this.props.size / 2;
		styles.circularDisplay.borderColor = this.props.color;

		
		return (
			<View>
		<AnimatedCircularProgress
			ref='circularProgress'
			size={this.props.size}
			width={5}
			fill={(this.state.numberofCars * 100) / 235}
			tintColor={this.props.color}
		backgroundColor="#3d5875" 
		>
		{
			() => (
			<Text style={{ fontSize: this.props.textSize }}>
			{ this.state.numberofCars }
			</Text>
			)

		}
		</AnimatedCircularProgress>
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
	},
};
export default ParkDisplay;
