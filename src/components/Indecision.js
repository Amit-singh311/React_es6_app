import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

export default class Indecision extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption  = this.handleDeleteOption.bind(this);
		this.handlePick          = this.handlePick.bind(this);
		this.handleAddOption     = this.handleAddOption.bind(this);
		this.state = {
			options  : props.options
		}
	}
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options : []
			}
		});
	}
	handleDeleteOption(option) {
		console.log('hdo', option);
	}
	/*const xyz = () => {} // does not treat this as object but thinks it as of function body and returns undefined.
	//to solve this.
	const xyz = () => ({});
	this.setState(() => ({options : []}));*/
	handlePick() {		
    	const randomElement = Math.floor(Math.random() * this.state.options.length);
    	const option        = this.state.options[randomElement];
    	alert(option);          
	}
	handleAddOption(option) {
        this.setState((prevState) => {
        	return {
        		options : prevState.options.concat(option)
        	};
        });
	}
	render() {
		/*const title    = "Indecision";*/
		const subtitle = "Put your life in the hands of the computer";
		
		return (
			<div>
			{/*it is mandatory to write the react component in the below fashion otherwise it wld not rconnize */}		
				<Header  subtitle = {subtitle}/>
				<Action  hasOptions = {this.state.options.length > 0}
				         handlePick = {this.handlePick}
				/>
				<Options options = {this.state.options} 
				         handleDeleteOptions = {this.handleDeleteOptions}
				         handleDeleteOption  = {this.handleDeleteOption}
				/>
				<AddOption handleAddOption = {this.handleAddOption} />
	        </div>
			);
	}
}
Indecision.defaultProps = {
	options: []
}