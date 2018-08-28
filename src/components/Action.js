import React from 'react';
//stateless functional react component

export default class Action extends React.Component {
	
	render() {
		return (
			<div>
		{/*why we have not put () in the method ?? because we want to reference it, not to call it.*/}
				<button 
				    onClick={this.props.handlePick}
				    disabled={!this.props.hasOptions}
				    >
				    what Should i do?
				</button>
			</div>
			);
	}
}