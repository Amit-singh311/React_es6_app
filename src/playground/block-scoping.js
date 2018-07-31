let limit = 200;
/*
* limit is block-scoped means it exits only within this block
 */
{
	let limit = 20;
	console.log('backstage limit',limit);
}
console.log('overall limit', limit);