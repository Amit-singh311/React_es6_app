import React from 'react';
//react component
export default class Action extends React.Component {
	//self contained method in each component.
	handlepick() {
		alert('i was clicked');
	}
	render() {
		return (
			<div>
		{/*why we have not put () in the method ?? because we want to reference it, not to call it.*/}
				<button onClick={this.handlepick}>what Should i do?</button>
			</div>
			);
	}
}