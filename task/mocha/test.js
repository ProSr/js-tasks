/* eslint-disable no-undef */
describe("Task 1", function() {
	beforeEach(function() {
		window.alert = sinon.stub(window, "alert")
	});
	afterEach(function() {
		window.alert.restore();
	});
	context("Inherit from SyntaxError", function() {
		
		it("assert(alert.calledWith('formatting error'))", function() {
			alert( err.message );
			assert(alert.calledWith("formatting error"));
		});
		it("assert(alert.calledWith('FormatError'))", function() {
			alert( err.name ); 
			assert(alert.calledWith("FormatError"));
		});
		it("assert(alert.calledWith('stack'))", function() {
			alert( err.stack );
			assert(alert.calledWith('FormatError: formatting error\n    at http://127.0.0.1:64089/task1.js:8:11'));
		});
		it("assert(alert.calledWith(true))", function() {
			alert( err instanceof FormatError );
			assert(alert.calledWith(true));
		});
		it("assert(alert.calledWith(true))", function() {
			alert( err instanceof SyntaxError );
			assert(alert.calledWith(true));
		});
	});
});
