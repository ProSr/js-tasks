/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Hide on click", function() {
		it("The wrap is appended to the body", function() {
			auxiliaryHTMLtask1();
			assert.deepEqual(wrapper, document.body.lastChild);
			assert.equal(wrapper.nodeType, 1);
		});
		it("The wrap was removed from the body", function() {
			solutionTask1(true);
			button.dispatchEvent(new Event('click'));
			assert.equal(text.hidden, true);
			wrapper.remove();
		});
	});
});
describe("Task 2", function() {
	context("Hide self", function() {
		
		it("The value 'hidden' attribute is false", function() {
			auxiliaryHTMLtask2();
			assert.equal(input.hasAttribute('hidden'), 0);
		});
		it("The value 'hidden' attribute is true", function() {
			input.dispatchEvent(new Event('click'));
			assert.equal(input.hasAttribute('hidden'), 1);
			input.remove();
		});
	});
});
describe("Task 3", function() {
	context("Which handlers run?", function() {
		before(function() {
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			window.alert.restore();
			button.remove();
		});
		
		it("Answer: - both handlers run", function() {
			auxiliaryHTMLtask3();
			button.dispatchEvent(new Event('click'));
			assert(alert.calledWith('1'));
			assert(alert.calledWith(2));
		});
	});
});
describe("Task 4", function() {
	context("Move the ball across the field", function() {
		before(function() {
			auxiliaryHTMLtask4();
			solutionTask4();
		});
		after(function() {
			dT4.remove();
		});

		it("it use all requirements", function() {
			assert(1);
		});
	});
});
describe("Task 5", function() {
	context("Create a menu sliding menu", function() {
		before(function() {
			auxiliaryHTMLtask5();
			solutionTask5();
		});
		after(function() {
			divTask5.remove();
		});
		it("by default ul hidden = true", function() {
			assert.equal(getComputedStyle(divTask5.lastElementChild).display, 'none');			
		});
		it("if call dispanchEvent method with click event then ul hidden = false", function() {
			divTask5.querySelector('.t').dispatchEvent(new Event('click'));
			assert.equal(getComputedStyle(divTask5.lastElementChild).display, 'block');			
			
		});
	});
});
describe("Task 6", function() {
	context("Add a closing button", function() {
		before(function() {
			auxiliaryHTMLtask6();
			solutionTask6();
		}); 
		after(function(){
			wrapperTask6.remove();
		});
		it("All Elements is wisible", function() {
			assert.equal(document.querySelector('.pane').hidden, false);
			assert.equal(document.querySelector('.pane').nextElementSibling.hidden, false);
			assert.equal(document.querySelector('.pane').nextElementSibling.nextElementSibling.hidden, false);
		});
		it("All Elements is hidden", function() {
			document.querySelector('.pane').lastElementChild.dispatchEvent(new Event('click'));
			assert.equal(document.querySelector('.pane').hidden, true);
			document.querySelector('.pane').nextElementSibling.lastElementChild.dispatchEvent(new Event('click'));
			assert.equal(document.querySelector('.pane').nextElementSibling.hidden, true);
			document.querySelector('.pane').nextElementSibling.nextElementSibling.lastElementChild.dispatchEvent(new Event('click'));
			assert.equal(document.querySelector('.pane').nextElementSibling.nextElementSibling.hidden, true);
		});
		
	});
});
describe("Task 7", function() {
	before(function() {
		auxiliaryHTMLtask7();
	})
	after(function() {
		dT7.remove();
	})
	context("Carousel", function() {
		
		it("press right arrow 2 times and then evaluate our scrollTop and 260 value", function() {
			dT7.firstElementChild.nextElementSibling.dispatchEvent(new Event('click'));
			dT7.firstElementChild.nextElementSibling.dispatchEvent(new Event('click'));
			assert.equal(dT7.children[2].scrollTop, 260);
		});
		it("press left arrow 1 times and then evaluate our scrollTop and 130 value", function() {
			dT7.firstElementChild.dispatchEvent(new Event('click'));
			assert.equal(dT7.children[2].scrollTop, 130);
		});
	});
});