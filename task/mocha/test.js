/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Get the attribute", function() {
		it("document . querySelector ( ' [data-widget-name] ' ) . dataset . widgetName === ' menu '", function() {
			makeTask1();
			assert.equal(document.querySelector('[data-widget-name]').dataset.widgetName, 'menu');
			removeTask1();
		});
	});
});
describe("Task 2", function() {
	context("Make external links orange", function() {
		
		it("test2 . querySelectorAll ( \" [ style *= ' color : orange ' ] \" ) . length === 3", function() {
			makeTest2();
			cororizeTest2();
			assert.equal(test2.querySelectorAll("[style*='color: orange']").length, 3);
			removeTest2();
		});
	});
});