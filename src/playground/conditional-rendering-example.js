console.log("App.js is running");
let user = {
	
	age:16,
	location:''

}
function getLocation(location)
{
	if (location) {
		return location;
	} else {
		return 'UnkNown';
	}
	
}
var app_id   = document.getElementById("app");
let template =(
<div>
	<h1>{user.name ? user.name : 'Anonymous'}</h1>
	<p>Age:{user.age >= 18 && user.age}</p>
	<p>Location:{getLocation(user.location)}</p>	
</div>  
);
ReactDOM.render(template, app_id);