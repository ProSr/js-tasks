/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Changing \"prototype\"", function() {
		it("assert.isTrue(rabbit.eats)", function() {
			assert.isTrue(rabbit.eats);
		});
		it("Rabbit.prototype = {};\nassert.isTrue(rabbit.eats)", function() {
			Rabbit.prototype = {};

			assert.isTrue(rabbit.eats);
		});
		it("Rabbit.prototype.eats = false;\nassert.isTrue(rabbit.eats)", function() {
			Rabbit.prototype.eats = false;

			assert.isTrue(rabbit.eats);
		});
		it("delete rabbit.eats;\nassert.isTrue(rabbit.eats)", function() {
			delete rabbit.eats;

			assert.isTrue(rabbit.eats);
		});
		it("delete Rabbit.prototype.eats;\nassert.isTrue(rabbit.eats)", function() {
			delete Rabbit.prototype.eats;

			assert.isTrue(rabbit.eats);
		});
	});
});
describe.only("Task 2", function() {
	context("Create an object with the same constructor", function() {
		it("obj2.constructor == Const", function() {
			let obj = new Const();
			let obj2 = new obj.constructor();
			assert.equal(obj2.constructor, Const);
		});
		it("obj2.constructor != Const", function() {
			let obj = new Const();
			Const.prototype = null;
			let obj2 = new obj.constructor();
			assert.equal(obj.constructor, Const);
			assert.notEqual(obj2.constructor, Const);
		});
	});
});
