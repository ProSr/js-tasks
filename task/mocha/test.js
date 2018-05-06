/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Create a notification", function() {
		before(function() {
			this.clock = sinon.useFakeTimers();
		});
		after(function() {
			this.clock = '';
		});
		it("The 5499 milliseconds from block life.", function() {
			let options = {
				top: 10,
				right: 10,
				html: "Hello!",
				className: "welcome"
			};
			showNotification(options);
			this.clock.tick(1000);
			assert(div.classList.contains('welcome'));
			this.clock.tick(1000);
			assert(!div.classList.contains('welcome'));
			this.clock.tick(2000);
			assert(div.classList.contains('welcome'));
			this.clock.tick(1499); // Дальше клок уже не тикает, поэтому 1500 выдаст ошибку 
			assert(!div.classList.contains('welcome'));
			div.remove();
		});
	});
});