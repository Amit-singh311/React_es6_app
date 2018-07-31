class Indecision extends React.Component {
	render() {
		const title = "Indecision";
		const subtitle = "Put your life in the hands of the computer";
		const options  = ['thing one', 'thing two', 'thing three', 'thing four'];
		return (
			<div>		
				<Header title = {title} subtitle = {subtitle}/>
				<Action />
				<Options options = {options} />
				<AddOption />
	        </div>
			);
	}

}
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>

			);
	}	
}

class Action extends React.Component {
	handlepick() {
		alert('i was clicked');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlepick}>what Should i do?</button>
			</div>
			);
	}
}
class Options extends React.Component {
	removeAll() {
		alert('click to remove');
	}
	render() {
		return (
			<div>
			     <button onClick={this.removeAll}>Remove All</button>
			    <h3>{this.props.options.length}</h3>
				<Option />
			</div>
			
			);
	}
}
class Option extends React.Component {
	render() {
		return (
			<div>
				<li>{this.props.options}</li>
				<li></li>
				<li></li>
			</div>
			)
	}
}
class AddOption extends React.Component {
	submit() {
		alert('i was submitted');
	}
	render() {
		return (
			<div>
			<form>
				<input type= "text" name="option" />
				<button onSubmit={this.submit}>Add options</button>
			</form>
			</div>
			)
	}
}
var app_id   = document.getElementById("app");

ReactDOM.render(<Indecision />, app_id);