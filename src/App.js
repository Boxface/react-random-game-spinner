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
			spinnerActive: false,
		};
		this.spin = this.spin.bind(this);
	}
	spin() {
		var totalDegrees = 800;
		this.setState( ({ degrees }) => {
			var spinDegrees = (Math.random() * (totalDegrees - 1 + 1) + 1) + 1500;
			console.log('degrees', degrees, spinDegrees);
			return {degrees: degrees + spinDegrees, spinnerActive: true};
		} );
		this.cleanUp();
	}
	cleanUp() {
		clearTimeout( this.timeout);
		this.timeout = setTimeout(() => {
			this.setState({
				spinnerActive: false,
			});
		}, 6000);
	}
	render() {
		const { degrees, spinnerActive } = this.state;
		return (
			<div id="App">
				<Header>
					<h1>What will you be playing today?</h1>
				</Header>
				<Container>
					<Spinner spinnerActive={spinnerActive} degrees={degrees}></Spinner>
				</Container>
				<Container>
					<Button onClick={this.spin}>
						Slap me thrice
					</Button>
				</Container>
			</div>
		);
	}
}

export default App;
