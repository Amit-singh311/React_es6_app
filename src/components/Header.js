import React from 'react';
//Below are the react components
export default class Header extends React.Component {
	
	render() {
		
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>

			);
	}	
}