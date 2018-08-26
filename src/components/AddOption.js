import React from 'react';
//react component
export default class AddOption extends React.Component {
	handleAddOption(e) {
		//prevents the default form submission
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if (option) {
			alert(option);
		}
	}
	render() {
		return (
			<div>
			<form onSubmit={this.handleAddOption}>
				<input type= "text" name="option" />
				<button>Add options</button>
			</form>
			</div>
			)
	}
}