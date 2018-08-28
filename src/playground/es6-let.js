/*
*var can be re-assigned.
 */
var nameVar = 'Amit';
var nameVar = "ammy";
console.log('nameVar:', nameVar);
/*
* let can be re-assigned as well as it is block-scoped, function -scoped.
 */
let nameLet = 'sam';

console.log('nameLet:', nameLet);

const nameConst = 'nitish';

console.log('nameConst:',nameConst);

var fullName = "Amit singh";

if (fullName) {
	var firstName = fullName.split(' ')[1];
	console.log(firstName);
}
console.log(firstName);