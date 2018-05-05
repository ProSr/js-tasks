/* eslint-disable no-undef */
describe("Task 1", function() {
	context("createTextNode vs innerHTML vs textContent", function() {
		it("createTextNode => solution1task1 . outerHTML === elementTask1 . outerHTML", function() {
			
			assert.equal(solution1task1.outerHTML, elementTask1.outerHTML);
		});
		it("innerHTML => solution2task1 . outerHTML === elementTask1 . outerHTML", function() {
			assert.notEqual(solution2task1.outerHTML, elementTask1.outerHTML);
		});
		it("textContent => solution3task1 . outerHTML === elementTask1 . outerHTML", function() {
			assert.equal(solution3task1.outerHTML, elementTask1.outerHTML);
		});
	});
});
describe("Task 2", function() {
	context("Clear the element", function() {
		it("clearTask2 ( elemTask2 ) === ''", function() {
			
			assert.equal(clearTask2(elemTask2), '');
		});
	});
});
describe("Task 3", function() {
	context("Why does \"aaa\" remain?", function() {
		it("", function() {
			assert(1);
		});
	});
});
describe("Task 4", function() {
	context("Create a list", function() {
		before(function() {
			window.prompt = sinon.stub(window, 'prompt');
		});
		after(function() {
			window.prompt.restore();
		});
		it("< ul > < li > rockstar < /li > < li > cupcake < /li > < li > flower < /li > < li > < b > people </b> < /li > < li > fashion < /li > < /ul >", function() {
			prompt.onCall(0).returns("rockstar");
			prompt.onCall(1).returns("cupcake");
			prompt.onCall(2).returns("flower");
			prompt.onCall(3).returns("<b>people</b>");
			prompt.onCall(4).returns("fashion");
			prompt.onCall(5).returns(null);
			assert.equal(createListTask4().outerHTML, "<ul><li>rockstar</li><li>cupcake</li><li>flower</li><li>&lt;b&gt;people&lt;/b&gt;</li><li>fashion</li></ul>");
			
		});
	});
});
describe("Task 5", function() {
	context("Create a tree from the object", function() {
		it("createTreeTask5v1 ( document . getElementById ( 'tree1' ) , data ) , createTreeTask5v2 ( document . getElementById ( 'tree2' ) , data )", function() {
			let data = {
				"Fish": {
					"trout": {},
					"salmon": {}
				},

				"Tree": {
					"Huge": {
						"sequoia": {},
						"oak": {}
					},
					"Flowering": {
						"redbud": {},
						"magnolia": {}
					}
				}
			};

			let tree1 = document.createElement('div');
			tree1.id = 'tree1';
			let tree2 = document.createElement('div');
			tree2.id = 'tree2';
			document.body.append(tree1, tree2);
			createTreeTask5v1(document.getElementById('tree1'), data);
			createTreeTask5v2(document.getElementById('tree2'), data);
			assert.equal(tree1.innerHTML, tree2.innerHTML);
			
			tree1.remove();
			tree2.remove();
		});
	});
});
describe("Task 6", function() {
	context("Show descendants in a tree", function() {
		it("The created list is equal to our list", function() {
			let listTask6 = document.createElement('div');
			listTask6.id = 'div';
			listTask6.innerHTML = '<ul><li>Animals<ul><li>Mammals<ul><li>Cows</li><li>Donkeys</li><li>Dogs</li><li>Tigers</li></ul></li><li>Other<ul><li>Snakes</li><li>Birds</li><li>Lizards</li></ul></li></ul></li><li>Fishes<ul><li>Aquarium<ul><li>Guppy</li><li>Angelfish</li></ul></li><li>Sea<ul><li>Sea trout</li></ul></li></ul></li></ul>';
			document.body.append(listTask6);
			solutionTask6(div.firstElementChild);
			assert.equal(div.innerHTML, '<ul><li>Animals [9]<ul><li>Mammals [4]<ul><li>Cows</li><li>Donkeys</li><li>Dogs</li><li>Tigers</li></ul></li><li>Other [3]<ul><li>Snakes</li><li>Birds</li><li>Lizards</li></ul></li></ul></li><li>Fishes [5]<ul><li>Aquarium [2]<ul><li>Guppy</li><li>Angelfish</li></ul></li><li>Sea [1]<ul><li>Sea trout</li></ul></li></ul></li></ul>');
			listTask6.remove();
		});
	});
});
describe("Task 7", function() {
	context("Create a calendar", function() {
		it("Our calendar should be the same as it should be.", function() {
			let auxiliaryTask7 = addAuxiliaryElementsTask7();
			auxiliaryTask7('calendar1');
			auxiliaryTask7('calendar2');
			createCalendar1task7(calendar1, 2018, 4);
			createCalendar2task7(calendar2, 2018, 4);
			assert.equal(calendar1.innerHTML, calendar2.innerHTML);
			styleTask7.remove();
			calendar1.remove();
			calendar2.remove();
		});
	});
});
describe("Task 8", function() {
	context("Colored clock with setInterval", function() {
		it("clock", function() {
			addAuxiliaryElementsTask8();
			assert.equal(clock.innerHTML, '<span id="hours" style="color: red">ЧЧ</span>:<span id="minutes" style="color: green">ММ</span>:<span id="seconds" style="color: blue">СС</span>');
			div.remove();
		});
	});
});
describe("Task 9", function() {
	context("Insert the HTML in the list", function() {
		it("", function() {
			addAuxiliaryElementsTask9();
			solutionTask9();
			assert.equal(task9.innerHTML, '<ul id="ul"><li id="one">1</li><li id="li2">2</li><li id="li3">3</li><li id="two">4</li></ul>');
			task9.remove();
		});
	});
});
describe("Task 10", function() {
	context("Sort the table", function() {
		it("The task10 complete successfull. Yaba-daba-dooo", function() {
			addAuxiliaryTask10();
			solutionTask10();
			assert.equal(div.innerHTML, "<table><tbody><tr><th>Name</th><th>Surname</th><th>Age</th></tr><tr><td>Ann</td><td>Lee</td><td>5</td></tr><tr><td>John</td><td>Smith</td><td>10</td></tr><tr><td>Pete</td><td>Brown</td><td>15</td></tr></tbody></table>");
			div.remove();
		});
	});
});