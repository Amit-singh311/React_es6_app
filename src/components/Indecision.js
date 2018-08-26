import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

export default class Indecision extends React.Component {
	render() {
		const title    = "Indecision";
		const subtitle = "Put your life in the hands of the computer";
		const options  = ['thing one', 'thing two', 'thing three', 'thing four'];
		return (
			<div>
			{/*it is mandatory to write the react component in the below fashion otherwise it wld not rconnize */}		
				<Header title = {title} subtitle = {subtitle}/>
				<Action />
				<Options options = {options} />
				<AddOption />
	        </div>
			);
	}
}