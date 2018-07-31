let count = 1;
let addOne = () => {
	count++;
	renderCounterApp();
};
let minusOne = () => {
	count--;
	renderCounterApp();
};
let reset = () => {
	count = 0;
	renderCounterApp();
}

var app_id   = document.getElementById("app");
let renderCounterApp = () => {
	const templateTwo = (
		    <div>
		    	<h1>Count:{count}</h1>
		    	<button onClick={addOne}>+1</button>
		    	<button onClick={minusOne}>-1</button>
		    	<button onClick={reset}>Reset</button> 
		    </div>
		);
	ReactDOM.render(templateTwo, app_id);
}
renderCounterApp();