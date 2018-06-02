/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Selectable list", function() {
	  	before(function(){
			auxiliaryHTMLtask1();
			solutionTask1();
			
		});
		after(function() {
			divTask1.remove();
		});
		it("document.querySelectorAll('.selected').length, 1", function() {
			ul.firstElementChild.dispatchEvent(new MouseEvent('click', {bubbles: true, metaKey: true, ctrlKey: true}))
			assert.equal(document.querySelectorAll('.selected').length, 1);
		});
		it("document.querySelectorAll('.selected').length, 2", function() {
			ul.lastElementChild.dispatchEvent(new MouseEvent('click', {bubbles: true, metaKey: true, ctrlKey: true}))
			assert.equal(document.querySelectorAll('.selected').length, 2);
		});
		it("document.querySelectorAll('.selected').length, 3", function() {
			ul.children[3].dispatchEvent(new MouseEvent('click', {bubbles: true, metaKey: true, ctrlKey: true}))
			assert.equal(document.querySelectorAll('.selected').length, 3);
		});
	});
});