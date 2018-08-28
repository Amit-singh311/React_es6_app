import React from 'react';
import Option from './Option';
//react component
export default class Options extends React.Component {
	
	render() {
		return (
			<div>
			    <button onClick={this.props.handleDeleteOptions}>Remove All</button>
			    {
			    	this.props.options.map( 
			    		(option) => 
			    		<Option 
			    		key={option} optiontext={option} 
			    		handleDeleteOption = {this.props.handleDeleteOption}
			    		/>)
			    }
			</div>
			
			);
	}
}