import React from 'react'
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision'
/*
* stateless functional component does not allow for state but they allow for the props.
 */
/*const User = (props) => {
	return  (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};*/

var app_id   = document.getElementById("app");
ReactDOM.render(<Indecision />, app_id);