/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Rewrite to class", function() {
		function checkingClock() {
			let date = new Date();

			let hours = date.getHours();
			if (hours < 10) hours = '0' + hours;

			let mins = date.getMinutes();
			if (mins < 10) mins = '0' + mins;

			let secs = date.getSeconds();
			if (secs < 10) secs = '0' + secs;
			
			return `${hours}:${mins}:${secs}`;
		}
		beforeEach(function() {
			window.alert = sinon.stub(window, "alert");
		});
		afterEach(function() {
			window.alert.restore();
		});
		before(function() {
			this.clock = sinon.useFakeTimers();
		});
		after(function() {
			this.clock.restore();
		});
		it("alert.calledWith(asdf())", function() {
			let clock = new Clock({template: 'h:m:s'});
			clock.start();
			assert(alert.calledWith(checkingClock()));
		});
		it("alert.calledWith(asdf())", function() {
			this.clock.tick(1000);
			assert(alert.calledWith(checkingClock()));
			
		});
		it("alert.calledWith(asdf())", function() {
			this.clock.tick(5000);
			assert(alert.calledWith(checkingClock()));
			
		});
	});
});