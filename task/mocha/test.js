/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Hide messages with delegation", function() {
		before(function(){
			auxiliaryHTMLtask1();
			solutionTask1();
		});
		after(function() {
			dT4.remove();
		});
		it("Is the first Pane hidden? No", function() {
			
			assert.equal(container.querySelector('.pane').hidden, false);
		});
		it("Is the first Pane hidden after the 'click' mouse event at the <p> paragraph tag which inside the Pane? No", function() {
			var evt = new Event("click", {bubbles: true});
			
			container.querySelector('p').dispatchEvent(evt);
			assert.equal(container.querySelector('.pane').hidden, false);
		});
		it("Is the first Pane hidden after the 'click' mouse event at the \".remove-button\" child button? Yes", function() {
			var evt = new Event("click", {bubbles: true});

			container.querySelector('button').dispatchEvent(evt);
			assert.equal(container.querySelector('.pane').hidden, true);
		});
	});
});
describe("Task 2", function() {
	context("Tree menu", function() {
		before(function() {
			auxiliaryHTMLtask2();
			solutionTask2();
		});
		after(function() {
			tree.remove();
		});
		it("The first 'ul' element of the '#tree' list haven't hidden state", function() {
			
			assert.equal(tree.querySelector('ul').hidden, false);
		});
		it("After the mouse click by the first 'ul' element, it still haven't hidden state", function() {
			var evt = new Event("click", {bubbles: true});
			
			tree.querySelector('ul').dispatchEvent(evt);
			assert.equal(tree.querySelector('ul').hidden, false);
		});		
		it("After the click of the sibling 'span' element by the first 'ul' element, now sit have hidden state", function() {
			var evt = new Event("click", {bubbles: true});
			
			tree.querySelector('ul').previousElementSibling.dispatchEvent(evt);
			assert.equal(tree.querySelector('ul').hidden, true);
		});		
	});
});
describe("Task 3", function() {
	context("Sortable table", function() {
		before(function() {
			auxiliaryHTMLtask3();
			solutionTask3();
		});
		after(function() {
			divTask3.remove();
		});
		it("DefaultStateRows not deep Equal sortAgeRows", function() {
			let defaultStateRows = [...grid.tBodies[0].childNodes];
			
			grid.tHead.querySelector('[data-type="number"]').dispatchEvent(new Event('click', {bubbles: true}));
			let sortAgeRows = [...grid.tBodies[0].childNodes];
			
			assert.notDeepEqual(defaultStateRows, sortAgeRows);
		});
		it("sortAgeRows not deep Equal sortNameRows", function() {
			grid.tHead.querySelector('[data-type="number"]').dispatchEvent(new Event('click', {bubbles: true}));
			let sortAgeRows = [...grid.tBodies[0].childNodes];
			
			grid.tHead.querySelector('[data-type="string"]').dispatchEvent(new Event('click', {bubbles: true}));
			let sortNameRows = [...grid.tBodies[0].childNodes];
			
			assert.notDeepEqual(sortAgeRows, sortNameRows);
		});
	});
});
describe("Task 4", function() {
	context("Tooltip behavior", function() {
		before(function() {
			auxiliaryHTMLtask4();
			solutionTask4();
		})
		after(function() {
			wrapTask4.remove();
		})
		it("The tooltip should not cross window edges at the first button.", function() {
			let t = wrapTask4.querySelector('button');
			
			t.scrollIntoView(false);
			assert.equal(t.childElementCount, 0);
			
			t.dispatchEvent(new Event('mouseover', {bubbles: true}));
			assert.equal(t.childElementCount, 1);
			assert(t.firstElementChild.style.bottom);
			
			t.dispatchEvent(new Event('mouseout', {bubbles: true}));
			t.scrollIntoView();
			assert.equal(t.childElementCount, 0);
			
			t.dispatchEvent(new Event('mouseover', {bubbles: true}));
			assert.equal(t.childElementCount, 1);
			
			assert(t.firstElementChild.style.top);
			t.dispatchEvent(new Event('mouseout', {bubbles: true}));
		});
		it("The tooltip should not cross window edges at the second button.", function() {
			let t = wrapTask4.querySelector('button').nextElementSibling;
			
			t.scrollIntoView(false);
			assert.equal(t.childElementCount, 0);
			
			t.dispatchEvent(new Event('mouseover', {bubbles: true}));
			assert.equal(t.childElementCount, 1);
			assert(t.firstElementChild.style.bottom);
			
			t.dispatchEvent(new Event('mouseout', {bubbles: true}));
			t.scrollIntoView();
			assert.equal(t.childElementCount, 0);
			
			t.dispatchEvent(new Event('mouseover', {bubbles: true}));
			assert.equal(t.childElementCount, 1);
			
			assert(t.firstElementChild.style.top);
			t.dispatchEvent(new Event('mouseout', {bubbles: true}));
		});
	});
});