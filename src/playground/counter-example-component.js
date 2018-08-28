class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handlePlusOne  = this.handlePlusOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset    = this.handleReset.bind(this);
		this.state = {
			count: props.count
		};
	}
	handlePlusOne() {
		//setState methods takes only one argument
		this.setState( (prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count -1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
                count:0
			};			
		});
	}
	render() {
		return (
			<div>
				<h1>Count:{this.state.count}</h1>
				<button onClick={this.handlePlusOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset }>reset</button>
			</div>
			);
	}
}
Counter.defaultProps = {
	count: 0

};
var app_id   = document.getElementById("app");
ReactDOM.render(<Counter count={1} />, app_id );