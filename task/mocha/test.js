/* eslint-disable no-undef */
describe("Task 1", function() {
	context("What's in the nodeType?", function() {
		before(function() {
			window.alert = sinon.stub(window, 'alert');
		});
		after(function() {
			window.alert.restore();
		});
		it("alert.calledWith(1)", function() {
			alert(document.body.lastChild.nodeType);
			assert(alert.calledWith(1));
			sc.outerHTML = s.outerHTML;
		});
	});
});
describe("Task 2", function() {
	context("Tag in comment", function() {
		before(function() {
			window.alert = sinon.stub(window, 'alert');
		});
		after(function() {
			window.alert.restore();
		});
		it("alert.calledWith('BODY')", function() {
			alert( task2.firstChild.data );
			assert(alert.calledWith('BODY'));
		});
	});
});
describe.only("Task 3", function() {
	context("Where's the 'document' in the hierarchy?", function() {
			it('getInstanceOfTask3(document), "HTMLElement"', function() {
				
				assert.equal(getInstanceOfTask3(document), "HTMLDocument");
			});
	});
});