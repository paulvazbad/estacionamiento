import React from 'react';
import { Text } from 'react-native';
import { Header, Body, Right, Left, Title } from 'native-base';

const MainHeader = (props) => {
return (
	<Header style={{ backgroundColor: props.color }}>
		<Left />
			<Body>
				<Title>
				{props.children}
				</Title>
			</Body>
		<Right />
	</Header>
	);
};

export default MainHeader;
