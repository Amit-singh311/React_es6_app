/*
* Nesting of the react component.
 */
/*const obj = {
	name :'Amit',
	getName() {
		return this.name;
	} 
}
//cannot access the getname as the context has been changed
const getname = obj.getName;
console.log(getname());*/
class Indecision extends React.Component {
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
//Below are the react components
class Header extends React.Component {
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
//react component
class Action extends React.Component {
	//self contained method in each component.
	handlepick() {
		alert('i was clicked');
	}
	render() {
		return (
			<div>
		{/*why we have not put () in the method ?? because we want to reference it, not to call it.*/}
				<button onClick={this.handlepick}>what Should i do?</button>
			</div>
			);
	}
}
//react component
class Options extends React.Component {
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
//react component
class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optiontext}
			</div>
			)
	}
}
//react component
class AddOption extends React.Component {
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
var app_id   = document.getElementById("app");

ReactDOM.render(<Indecision />, app_id);