class Person {
	constructor( name = 'Anonymous', age = 0 ) {
		this.name = name;
		this.age  = age;
	}
	gretting() {
		//return 'Hii i am'+this.name+'!';
		return `Hii! i'm ${this.name} `;
	}
	description() {
		return `${this.name} is ${this.age} years old.`;
	}

}
class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

}
const me = new Student('Amit Singh', 22, 'computer Science');
console.log(me);
const bro = new Student();
console.log(bro);