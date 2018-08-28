import React from 'react'
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';
import './styles/styles.css';
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
/*const Layout = (props) => {
	return (
		<div>
			<p> header </p>
			{props.children}
			<p> footer </p>
		</div>
		);
};*/
/*const Template = (props) => {
	return (
		<div>
			<p>This is the main content</p>
		</div>
		)
}*/

var app_id   = document.getElementById("app");
ReactDOM.render((<Indecision options= {['devils den', 'second district']} />), app_id);