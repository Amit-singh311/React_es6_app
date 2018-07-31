let Visibilty = false;
let data;
let informData = () => {
	Visibilty = !Visibilty;
	
	 showData();

}
let hideData = () => {
	 data = "";
	 showData();

}
var app_id   = document.getElementById("app");
const showData = () => {
	const template = (
		<div>
		    <h1>Visibilty Toggle</h1>
			<button onClick={informData}>{Visibilty ? 'hide details' : 'show details'}</button>
			<p>{Visibilty && "Here are some details"}</p>

		</div>
		);
	ReactDOM.render(template, app_id)

}
showData();