import React from 'react';
import Option from './Option';
//react component
export default class Options extends React.Component {
	//constructor of the react componenet gets called on the props object
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll() {
		console.log(this.props.options);
		/*
		  when we do this it says i can read the props of undefined y?? bacause we loses the this binding here.
		 */
		//console.log(this.props.options.length);
		//alert('click to remove');
	}
	render() {
		return (
			<div>
			    <button onClick={this.handleRemoveAll}>Remove All</button>
			    {
			    	this.props.options.map( (option) => <Option key={option} optiontext={option} />)
			    }
			</div>
			
			);
	}
}