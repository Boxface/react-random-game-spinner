import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
	constructor() {
		super();
		this.state = {
			degrees: 0,
		};
		this.spin = this.spin.bind(this);
	}
	spin() {
		var totalDegrees = 1800;
		this.setState( ({ degrees }) => {
			// var degreesUnder360 = degrees % 360;
			var spinDegrees = (Math.random() * (totalDegrees - 1 + 1) + 1);
			console.log('degrees', degrees, spinDegrees);
			return {degrees: degrees + spinDegrees};
		} );
	}
	render() {
		const { degrees } = this.state;
		return (
			<div id="App">
				<Header>
					<h1>What will you be playing today?</h1>
				</Header>
				<Container>
					<Spinner degrees={degrees}></Spinner>
				</Container>
				<Container>
					<Button onClick={this.spin}>
						Click me Daddy
					</Button>
				</Container>
			</div>
		);
	}
}

export default App;
