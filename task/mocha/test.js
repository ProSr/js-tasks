/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Error creating an instance", function() {
		before(function() {
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			window.alert.restore();
		});
		it("alert . calledWith ( \" White Rabbit \" ) === true", function() {
		let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
		alert(rabbit.name);
			
			assert(alert.calledWith("White Rabbit"));
			
		});
	});
});
describe("Task 2", function() {
	context("Extended clock", function() {
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
		it("alert.calledWith(checkingClock())", function() {
			lowResolutionClock.start();
			assert(alert.calledWith(checkingClock()));
		});
		it("alert.calledWith(checkingClock())", function() {
			this.clock.tick(10000);
			assert(alert.calledWith(checkingClock()));
			
		});
		it("alert.calledWith(checkingClock())", function() {
			this.clock.tick(20000);
			assert(alert.calledWith(checkingClock()));
			
		});
	});
});
describe("Task 3", function() {
	context("Class extends Object?", function() {
		before(function() {
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			window.alert.restore();
		});
		it("alert.calledWidth()", function() {
			alert( rabbit2.hasOwnProperty('name') );
			assert(alert.calledWith());
			
		});
	});
});