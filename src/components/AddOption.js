import React from 'react';
//react component
export default class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
	}
	handleAddOption(e) {
		//prevents the default form submission
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if (option) {
			this.props.handleAddOption(option);
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