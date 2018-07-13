/* eslint-disable no-undef */
describe("Task 1", function() {
    context("Endless page", function() {

        before(function() {
			auxiliaryHTMLtask1();
			solutionTask1();

        });
        after(function() {
			divTask1.remove();
        });
        
        it('startScrollHeight !== .scrollHeight', function() {
			let startScrollHeight = divTask1.scrollHeight;
			divTask1.dispatchEvent(new MouseEvent('scroll'));
			divTask1.scrollTop += 200;

            assert.notEqual(startScrollHeight, divTask1.scrollHeight);
        });
    });
});
describe("Task 2", function() {
    context("Up/down button", function() {

        before(function() {
			auxiliaryHTMLtask2();
			solutionTask2();
        });
        after(function() {
			divTask2.remove();
        });
        
        it('after scroll down "thoTheTop.hidden === false"', function() {
			
			let toTheTopStart = toTheTop.hidden;
			divTask2.scrollTop += divTask2.offsetHeight + 1;
			divTask2.dispatchEvent(new MouseEvent('scroll'));
			
            assert.notEqual(toTheTopStart, toTheTop.hidden);
        });
        
        it('after scroll up "toTheTop.hidden === true"', function() {
			
			let toTheTopStart = toTheTop.hidden;
			divTask2.scrollTop = 0;
			divTask2.dispatchEvent(new MouseEvent('scroll'));
			
            assert.notEqual(toTheTopStart, toTheTop.hidden);
        });
        
        it('after click on toTheTop "toTheTop.hidden === true" and "scrollTop === 0"', function() {
			divTask2.scrollTop += divTask2.offsetHeight + 1;
			divTask2.dispatchEvent(new MouseEvent('scroll'));
			
			let toTheTopStart = toTheTop.hidden;
			toTheTop.dispatchEvent(new MouseEvent('click'))
			divTask2.dispatchEvent(new MouseEvent('scroll'));
			
            assert.notEqual(toTheTopStart, toTheTop.hidden);
        });
		
    });
});
describe.only("Task 3", function() {
    context("Load visible images", function() {

        before(function() {
			auxiliaryHTMLtask3();
			solutionTask3();
        });
        after(function() {
			divTask3.remove();
        });
        
        it('after the scrolling, when the first img with data-src attribute is not visible it deta-src exists', function() {
			
            assert(divTask3.querySelector('img').dataset.src);
        });
        it('after the scrolling, when the first img with data-src attribute is visible it deta-src not exists', function() {
			divTask3.scrollTop = divTask3.clientHeight;
			divTask3.dispatchEvent(new MouseEvent('scroll'));
            assert(!divTask3.querySelector('img').dataset.src);
        });
    });
});
