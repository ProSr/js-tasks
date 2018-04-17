/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Add toString to the dictionary", function() {
		let arr2 = [];
		before(function() {
			for(let key in dictionary) {
			  	arr2.push(key); // "apple", then "__proto__"
			}
		});
		it("arr2.toString(), \"apple,__proto__\"", function() {
			assert.equal(arr2.toString(), "apple,__proto__");
		});
		it("dictionary, \"apple,__proto__\"", function() {
			assert.equal(dictionary, "apple,__proto__");
		});
	});
});
describe("Task 2", function() {
	context("The difference beteeen calls", function() {
		beforeEach(function() {
			window.alert = sinon.stub(window, "alert");
		});
		afterEach(function() {
			window.alert.restore();
		});
		it("rabbit.sayHi() == \"Rabbit\"", function() {
			rabbit.sayHi();
			assert(alert.calledWith("Rabbit"));
		});
		it("Rabbit.prototype.sayHi() == \"Rabbit\"", function() {
			Rabbit.prototype.sayHi();
			assert(!alert.calledWith("Rabbit"));
		});
		it("Object.getPrototypeOf(rabbit).sayHi() == \"Rabbit\"", function() {
			Object.getPrototypeOf(rabbit).sayHi();
			assert(!alert.calledWith("Rabbit"));
		});
		it("rabbit.__proto__.sayHi() == \"Rabbit\"", function() {
			rabbit.__proto__.sayHi();
			assert(!alert.calledWith("Rabbit"));
		});
	});
});
