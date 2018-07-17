import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import './App.css';

const ProgressBar = styled.div`
	background: green;
	width: 100%;
	height: 100%;
	margin: 0;
	width: ${props => props.width}%;
`;

class Progress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startProgress: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleClick(e) {
		this.setState({
			startProgress: 1
		});
	}

	handleReset(e) {
		this.setState({
			startProgress: 0
		})
	}

	truncate(x) {
		return Math.trunc(x);
	}

	render() {
		return(
			<div id="parent">
				<div className='container'>
					<div id='progress-holder'>
						<p id='progress-text'>
							{' '} 
							Start the progress! <button 
								onClick={this.handleClick}
								className='btn btn-lg btn-primary'
							>
								Click 
							</button>
							<button 
								onClick={this.handleReset}
								className='btn btn-lg btn-primary'
							>
								Reset
							</button>
						</p>
						<div id="progress-bar-wrapper">
							<Motion
								defaultStyle={{ width: 0 }}
								style={{
									width: spring(this.state.startProgress ? 100 : 0, {
										stiffness: 10,
										damping: 10
									})
								}}
							>
								{style => (
									<ProgressBar width={style.width}>
										{' '}
										{this.truncate(style.width)}%
									</ProgressBar>
								)}
							</Motion>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Progress;