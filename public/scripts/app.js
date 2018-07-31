'use strict';

var p = new Promise(function (resolve, reject) {
	resolve('Resolved promise data');
});
p.then(function (response) {
	console.log(response);
}).catch(function (error) {
	return console.log(error);
});
