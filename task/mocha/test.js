/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Why \"return false\" doesn't work?", function() {
		before(function(){
			auxiliaryHTMLtask1();
			window.handler = solutionTask1();
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			divTask1.remove();
			window.alert.restore();
			window.handler = null;
		});
		it("Task solution is ' . preventDefault ( ) '", function() {
			divTask1.lastElementChild.dispatchEvent(new Event('click'));
			assert(alert.calledWith('. . .'));
		});
	});
});
describe("Task 2", function() {
	context("Catch links in the element", function() {
		before(function(){
			window.confirm = sinon.stub(window, "confirm");
			confirm.returns(true);
			auxiliaryHTMLtask2();
			solutionTask2();
		});
		after(function() {
			divTask2.remove();
			window.confirm.restore();
		});
		it("At this task dispatching not work", function() {
			contents.querySelectorAll('a')[1].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			confirm.returns(true);
			assert.equal(confirm('asdf'), 0);
		});
	});
});
describe("Task 3", function() {
	context("Image gallery", function() {
		before(function(){
			auxiliaryHTMLtask3();
			solutionTask3();
		});
		after(function() {
			divTask3.remove();
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg'", function() {
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img1-lg.jpg');
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg' after divTask3.lastElementChild.children[0].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}))", function() {
			divTask3.lastElementChild.children[0].firstElementChild.firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img2-lg.jpg');
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg' after divTask3.lastElementChild.children[1].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}))", function() {
			divTask3.lastElementChild.children[1].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img3-lg.jpg');
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg' after divTask3.lastElementChild.children[2].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}))", function() {
			divTask3.lastElementChild.children[2].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img4-lg.jpg');
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg' after divTask3.lastElementChild.children[3].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}))", function() {
			divTask3.lastElementChild.children[3].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img5-lg.jpg');
		});
		it("largeImg.src === 'https://en.js.cx/gallery/img1-lg.jpg' after divTask3.lastElementChild.children[4].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}))", function() {
			divTask3.lastElementChild.children[4].firstElementChild.dispatchEvent(new Event('click', {bubbles: true}));
			assert.equal(largeImg.src, 'https://en.js.cx/gallery/img6-lg.jpg');
		});
	});
});