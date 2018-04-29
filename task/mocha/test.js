/* eslint-disable no-undef */
describe("Task 1", function() {

	context("DOM children", function() {

			
			it("get DIV element", function() {
				let p = document.body,
					d = makeHTML();
				d();
				assert.equal(p.firstElementChild, '[object HTMLDivElement]')
				d('delete html');
			});
			it("get UL element", function() {
				let p = document.body,
					d = makeHTML();
				d();
				assert.equal(p.firstElementChild.lastElementChild, "[object HTMLUListElement]");
				d('delete html');
			});
			it("get LI element", function() {
				let p = document.body,
					d = makeHTML();
				d();
				assert.equal(p.firstElementChild.lastElementChild.childNodes[1], '[object HTMLLIElement]');
				d('delete html');
			});

	});
});
describe("Task 2", function() {
	context("The sibling question", function() {
	
		it("result1 & result2 always null", function() {
			let str = "со строкой впереди второй результат тестов не null<div><div>0.0</div><div>0.1</div></div><div><div>1.0</div><div>1.1</div></div>";
			assert.isFalse(testSibling(str));
		});
	});
});
describe("Task 3", function() {
	context("Select all diagonal cells", function() {
				
		it("paint all diagonal cells in red", function() {
			makeTable();
			let tab = document.body.firstElementChild;
			let paint = paintTd(tab);
			assert.equal(tab.firstElementChild.innerHTML, '<tr><td style="background-color: red;">1:1</td><td>2:1</td><td>3:1</td><td>4:1</td><td>5:1</td></tr><tr><td>1:2</td><td style="background-color: red;">2:2</td><td>3:2</td><td>4:2</td><td>5:2</td></tr><tr><td>1:3</td><td>2:3</td><td style="background-color: red;">3:3</td><td>4:3</td><td>5:3</td></tr><tr><td>1:4</td><td>2:4</td><td>3:4</td><td style="background-color: red;">4:4</td><td>5:4</td></tr><tr><td>1:5</td><td>2:5</td><td>3:5</td><td>4:5</td><td style="background-color: red;">5:5</td></tr>');
			document.body.removeChild(tab);
		});
	});
});