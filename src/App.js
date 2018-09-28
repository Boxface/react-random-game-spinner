import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import Button from './components/Button/Button';

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
					<h1>What do you want to play?</h1>
				</Header>
				<Spinner degrees={degrees}></Spinner>
				<Button onClick={this.spin}>
					Click me Daddy
				</Button>
			</div>
		);
	}
}

export default App;
