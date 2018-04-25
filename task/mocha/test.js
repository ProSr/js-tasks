/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Finally or just the code?", function() {
		before(function() {
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			window.alert.restore();
		})
		it('in that task, must be only one \'alert\' message. существует 2 случая, в которых \'finally\' имеет смысл: 1. return &  2. trhow', function() {
			function c() {
				try {
					a();
				} catch(e) {
					return e instanceof ReferenceError
				}
			};
			assert.isTrue(c());
			assert(alert.calledWith('in that task, must be only one \'alert\' message'));
		});
	});
});