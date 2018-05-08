/* eslint-disable no-undef */
describe("Task 1", function() {
	context("What's the scroll from the bottom?", function() {
		it("A ScrollBottom variable is our solution for this Task.", function() {
			auxiliaryHTMLtask1('div');
			
			div.scrollTop = (div.scrollHeight - div.clientHeight) / 2;
			let scrollBottom = div.scrollHeight - div.clientHeight - div.scrollTop;
			assert.equal(scrollBottom, div.scrollTop);
			
			div.scrollTop = div.scrollHeight - div.clientHeight;
			scrollBottom = div.scrollHeight - div.clientHeight - div.scrollTop;
			assert.equal(scrollBottom, 0);
			
			div.remove();
		});
	});
});
describe("Task 2", function() {
	context("What is the scrollbar width?", function() {
		
		it("A ' scrollBarTask2 ' is our solution for this Task.", function() {
			auxiliaryHTMLtask2('div');
			
			let scrollBarTask2 = div.offsetWidth - div.clientWidth - div.clientLeft * 2;
			assert.equal(scrollBarTask2, 0);
			
			div.remove();
		});
	});
});
describe("Task 3", function() {
	context("Place the ball in the field center", function() {
		
		it("A ' solutionTask3 ' is our solution for this Task", function() {
			auxiliaryHTMLtask3();
			solutionTask3();
			
			assert.equal(Number.parseInt(ball.style.top), ball.offsetTop);
			assert.equal(Number.parseInt(ball.style.left), ball.offsetLeft);
			
			field.remove();
		});
	});
});
describe("Task 4", function() {
	context("The difference: CSS width versus clientWidth", function() {
		
		it("1. a string is not a number", function() {
			auxiliaryHTMLtask4();
			
			assert.equal(typeof getComputedStyle(div).width, 'string');
			assert.equal(typeof div.clientWidth, 'number');
			
		});
		it("2. If css property 'boxSizing' equals 'border-box', then getComputedStyle is not equals clientWidth", function() {
			div.style.boxSizing = 'border-box';
			
			assert.notEqual(getComputedStyle(div).width, div.clientWidth + 'px');
			
		});
		it("3. if div . style . width === auto, then it haven't the size — div.style.width === 'auto'", function() {
			div.style.width = 'auto';
			
			assert.equal(div.style.width, 'auto');
			
		});
		it("4. getComputedStyle ( div ) returns the size with dimention postfix 'px'", function() {
			div.style.width = '500px';
			
			assert.equal(getComputedStyle(div).width, '500px');
			
		});
		it("5. scrollbar size is substracted if reserved", function() {
			
			assert('scrollbar size is substracted if reserved');
			
			div.remove();
		});
	});
});
