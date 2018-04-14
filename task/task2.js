// Task 2. Searching algorithm
let head = {
	glasses: 1
};

let table = {
	pen: 3,
	__proto__: head
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table
};
//eslint-disable-next-line no-unused-vars
let pockets = {
	money: 2000,
	__proto__: bed
}
// Done