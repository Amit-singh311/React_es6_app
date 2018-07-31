const app = {
	title: 'Indecision App',
	description: 'Put your life in the hands of the computer',
	options: []
}
const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.options.value;
	if (option) {
		app.options.push(option);
		e.target.elements.options.value = '';
		renderApp();
	}    
}; 
const onMakeDecision = () => {
	let randomNumber = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNumber];
	alert(option);
}
const removeAll = () => {
	app.options = [];
	renderApp();
}
var app_id   = document.getElementById("app");
const numbers = [55, 101 , 1000];
const renderApp = () => {
	const template =(
		<div>
			<h1>{app.title}</h1>
			<p>{app.description && app.description}</p>
			<p>{app.options.length > 0 ? app.options.length : 'No options'}</p>
			<button disabled= {app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button> 
			<button onClick={removeAll}>Remove All </button>
			
			
			<ol>
			    {
			    	app.options.map( (option) => {
			    		return <li key={option}>{option}</li>
			    	})
			    }
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type = "text" name= 'options'  />
				<button>Add options</button>
			</form>
		</div>
		);
	ReactDOM.render(template, app_id);

}
renderApp();
