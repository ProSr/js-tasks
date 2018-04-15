/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Add method \"f.defer(ms)\" to functions", function() {

		before(function() {
			window.alert = sinon.stub(window, "alert");
			this.clock = sinon.useFakeTimers();
		});
		
		it("assert.isTrue(rabbit.eats)", function() {
			f.defer(1000);
			this.clock.tick(1000);
			assert(alert.calledWith("Hello!"));
		});
		
		after(function() {
			window.alert.restore();
			this.clock.restore();
		});
	});
});
describe.only("Task 2", function() {
	context("Add the decorating \"defer()\" to functions", function() {

		before(function() {
			window.alert = sinon.stub(window, "alert");
			this.clock = sinon.useFakeTimers();
		});
		
		it("assert.isTrue(rabbit.eats)", function() {
			f2.defer2(1000)(1, 2);
			this.clock.tick(1000);
			assert(alert.calledWith(3))
		});
		
		after(function() {
			window.alert.restore();
			this.clock.restore();
		});
	});
});