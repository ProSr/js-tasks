/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Partial application for login", function() {
		beforeEach(function() {
			sinon.stub(window, "prompt");
		});
		afterEach(function() {
			prompt.restore();
		});
		it("first test () === \"rockstar\"", function() {
			prompt.onCall(0).returns("rockstar");
			assert.equal(askPassword(user.login.bind(user, true), user.login.bind(user, false)), "John logged in")
		});
		it("first test () !== \"rockstar\"", function() {
			prompt.onCall(0).returns("fail");
			assert.equal(askPassword(user.login.bind(user, true), user.login.bind(user, false)), "John failed to log in")
		});
	});
});