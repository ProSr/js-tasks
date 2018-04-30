/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Search for elements", function() {

			it('The table with id="age-table"', function() {
				let form = document.createElement('div')
				makeHTMLtask1(form);
				assert.equal(document.getElementById("age-table"), form.lastElementChild.firstElementChild);
			});
			it("All label elements inside that table (there should be 3 of them)", function() {
				
				assert.deepEqual(Array.from(form.children), [form.firstChild, form.getElementsByTagName("hr")[0], form.lastElementChild]);
			});
			it("The first td in that table (with the word “Age”)", function() {
				
				assert.equal(document.getElementById("age-table").rows[0].firstElementChild, document.body.firstElementChild.lastElementChild.firstElementChild.children[0].firstChild.firstElementChild);
			});
			it("The form with the name search", function() {
				
				assert.equal(document.getElementsByName("search")[0], form.firstElementChild);
			});
			it("The first input in that form", function() {
				
				assert.equal(document.getElementsByName("search")[0].getElementsByTagName('input')[0], form.firstChild.firstElementChild.lastElementChild);
			});
			it("The last input in that form", function() {
				
				assert.equal(form.firstElementChild.lastElementChild, document.getElementsByName("search")[0].getElementsByTagName('input')[1]);
				makeHTMLtask1(form, 'норм');
				
			});
	});
});
describe("Task 2", function() {
	context("Count descendants", function() {
		before(function() {
			window.alert = sinon.stub(window, "alert");
		});
		after(function() {
			window.alert.restore();
		});
		it("form === норм", function() {
			makeHTMLtask2(document.createElement("div"));
			getLi(form);
			assert(alert.calledWith("Animals: 9"));
			assert(alert.calledWith("Mammals: 4"));
			assert(alert.calledWith("Cows: 0"));
			assert(alert.calledWith("Donkeys: 0"));
			assert(alert.calledWith("Dogs: 0"));
			assert(alert.calledWith("Tigers: 0"));
			assert(alert.calledWith("Other: 3"));
			assert(alert.calledWith("Snakes: 0"));
			assert(alert.calledWith("Birds: 0"));
			assert(alert.calledWith("Lizards: 0"));
			assert(alert.calledWith("Fishes: 5"));
			assert(alert.calledWith("Aquarium: 2"));
			assert(alert.calledWith("Guppy: 0"));
			assert(alert.calledWith("Angelfish: 0"));
			assert(alert.calledWith("Sea: 1"));
			assert(alert.calledWith("Sea trout: 0"));
			makeHTMLtask2(form, "норм");
		});
	});
});