/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Bound function as a method", function() {
		it('user . g ( ) === window', function() {
			assert.equal(user.g(), window);
		});
	});
});
describe("Task 2", function() {
	context("Second bind", function() {
		it("f ( ) === \"John\"", function() {
			assert.equal(f(), "John");
		});
	});
});
describe("Task 3", function() {
	context("Function property after bind", function() {
	  it("bound.test == undefined", function() {
		  assert.equal(bound.test, undefined);
	  });
	});
});
describe("Task 4. Throttle decorator", function() {
	context("Ask losing this", function() {
		beforeEach(function() {
			sinon.stub(window, "prompt");
		});
		afterEach(function() {
			prompt.restore();
		});
		it("first test () === \"rockstar\"", function() {
			prompt.onCall(0).returns("rockstar");
			assert.equal(askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2)), "John logged in")
		});
		it("first test () !== \"rockstar\"", function() {
			prompt.onCall(0).returns("fail");
			assert.equal(askPassword(() => user2.loginOk(), () => user2.loginFail()), "John failed to log in")
		});
	});
});