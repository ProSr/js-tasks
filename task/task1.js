// Task 1. Error creating an instance
class Animal {

	constructor(name) {
		this.name = name;
	}

}
//eslint-disable-next-line no-unused-vars
class Rabbit extends Animal {
	constructor(name) {
		super(name);
		this.created = Date.now();
	}
}

// Done 