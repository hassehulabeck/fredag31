import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 2
		}
		this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
		this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
	}
	render() {
		return <div>
			{this.state.value}
			<button id="inca" className="increase" onClick={this.handleIncreaseClick}>Increase</button>
			<button id = "deca" className="decrease" onClick={this.handleDecreaseClick}>Decrease</button>
		</div>;
	}
	handleIncreaseClick(event) {
		this.setState({
			value: this.state.value + 1
		});
	}
	handleDecreaseClick(event) {
		if( this.state.value > 0 ) {
			this.setState({
				value: this.state.value - 1
			});
		}
	}
}

export default Counter;
