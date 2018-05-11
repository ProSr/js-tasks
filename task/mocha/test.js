/* eslint-disable no-undef */
describe("Task 1", function() {
	context("Find window coordinates of the field", function() {
		it("leftUpperOuterCorner", function() {
			auxiliaryHtmlCssTask1();
			let node = document.getElementById('field');
			assert.deepEqual(leftUpperOuterCornerRelativeWindowTask1(node), leftUpperOuterCornerRelativeDocumentTask1(node));
		});
		it("RightBottomOuterCorner", function() {
			let node = document.getElementById('field');
			assert.deepEqual(RightBottomOuterCornerRelativeWindowTask1(node), RightBottomOuterCornerRelativeDocumentTask1(node));
		});
		it("LeftUpperInnerCorner", function() {
			let node = document.getElementById('field');
			assert.deepEqual(LeftUpperInnerCornerRelativeWindowTask1(node), LeftUpperInnerCornerRelativeDocumentTask1(node));
		});
		it("RightBottomInnerCorner", function() {
			let node = document.getElementById('field');
			assert.deepEqual(RightBottomInnerCornerRelativeWindowTask1(node), RightBottomInnerCornerRelativeDocumentTask1(node));
			auxiliaryHtmlCssTask1remove();
		});
	});
});
describe("Task 2", function() {
	after(function() {
			div.remove();
	});
	context("Show a note near the element", function() {
		it("anchor . getBoundingClientRect ( ) . top === div . querySelectorAll ( '.note' ) [ 0 ] . getBoundingClientRect ( ) . bottom", function() {
			auxiliaryHtmlCssTask2(document.createElement('div'));
			let anchor = div.querySelector('blockquote');
			showNoteTask2(anchor, "top", "note above");
			assert.equal(anchor.getBoundingClientRect().top, div.querySelectorAll('.note')[0].getBoundingClientRect().bottom);
		});
		it("anchor . getBoundingClientRect ( ) . right === div . querySelectorAll ( '.note' ) [ 1 ] . getBoundingClientRect ( ) . left", function() {
			let anchor = div.querySelector('blockquote');
			showNoteTask2(anchor, "right", "note at the right");
			assert.equal(anchor.getBoundingClientRect().right, div.querySelectorAll('.note')[1].getBoundingClientRect().left);
		});
		it("anchor . getBoundingClientRect ( ) . bottom === div . querySelectorAll ( '.note' ) [ 2 ] . getBoundingClientRect ( ) . top", function() {
			let anchor = div.querySelector('blockquote');
			showNoteTask2(anchor, "bottom", "note below");
			assert.equal(anchor.getBoundingClientRect().bottom, div.querySelectorAll('.note')[2].getBoundingClientRect().top);
		});
	});
});
describe("Task 3", function() {
	after(function() {
			divTask3.remove();
	});
	context("Show a note near the element (absolute)", function() {
		it("anchor . getBoundingClientRect ( ) . top === div . querySelectorAll ( '.note' ) [ 0 ] . getBoundingClientRect ( ) . bottom", function() {
			auxiliaryHtmlCssTask3(document.createElement('div'));
			let anchor = divTask3.querySelector('blockquote');
			showNoteTask3(anchor, "top", "note above");
			assert.equal(anchor.getBoundingClientRect().top, divTask3.getElementsByClassName('noteTask3')[0].getBoundingClientRect().bottom);
		});
		it("anchor . getBoundingClientRect ( ) . right === div . querySelectorAll ( '.note' ) [ 1 ] . getBoundingClientRect ( ) . left", function() {
			let anchor = divTask3.querySelector('blockquote');
			showNoteTask3(anchor, "right", "note at the right");
			assert.equal(anchor.getBoundingClientRect().right, divTask3.querySelectorAll('.noteTask3')[1].getBoundingClientRect().left);
		});
		it("anchor . getBoundingClientRect ( ) . bottom === div . querySelectorAll ( '.note' ) [ 2 ] . getBoundingClientRect ( ) . top", function() {
			let anchor = divTask3.querySelector('blockquote');
			showNoteTask3(anchor, "bottom", "note below");
			assert.equal(anchor.getBoundingClientRect().bottom, divTask3.querySelectorAll('.noteTask3')[2].getBoundingClientRect().top);
		});
	});
});
describe("Task 4", function() {
	after(function() {
			divTask4.remove();
	});
	context("Position the note inside (absolute)", function() {
		it("anchor . getBoundingClientRect ( ) . top === div . getElementsByClassName ( 'noteTask4' ) [ 0 ] . getBoundingClientRect ( ) . bottom", function() {
			auxiliaryHtmlCssTask4(document.createElement('div'));
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "top-out", "note top-out");
			assert.equal(anchor.getBoundingClientRect().top, divTask4.getElementsByClassName('noteTask4')[0].getBoundingClientRect().bottom);
		});
		it("anchor . getBoundingClientRect ( ) . right === div . getElementsByClassName ( 'noteTask4' ) [ 1 ] . getBoundingClientRect ( ) . left", function() {
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "right-out", "note at the right-out");
			assert.equal(Math.round(anchor.getBoundingClientRect().right), divTask4.getElementsByClassName('noteTask4')[1].getBoundingClientRect().left);
		});
		it("anchor . getBoundingClientRect ( ) . bottom === div . getElementsByClassName ( 'noteTask4' ) [ 2 ] . getBoundingClientRect ( ) . top", function() {
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "bottom-out", "note bottom-out");
			assert.equal(anchor.getBoundingClientRect().bottom, divTask4.getElementsByClassName('noteTask4')[2].getBoundingClientRect().top);
		});
		it("anchor . getBoundingClientRect ( ) . top === div . getElementsByClassName ( 'noteTask4' ) [ 0 ] . getBoundingClientRect ( ) . bottom", function() {
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "top-in", "note top-in");
			assert.equal(anchor.getBoundingClientRect().top, divTask4.getElementsByClassName('noteTask4')[3].getBoundingClientRect().top);
		});
		it("anchor . getBoundingClientRect ( ) . right === div . getElementsByClassName ( 'noteTask4' ) [ 1 ] . getBoundingClientRect ( ) . left", function() {
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "right-in", "note at the right-in");
			assert.equal(Math.round(anchor.getBoundingClientRect().right - divTask4.getElementsByClassName('noteTask4')[4].offsetWidth), divTask4.getElementsByClassName('noteTask4')[4].getBoundingClientRect().left);
		});
		it("anchor . getBoundingClientRect ( ) . bottom === div . getElementsByClassName ( 'noteTask4' ) [ 2 ] . getBoundingClientRect ( ) . top", function() {
			let anchor = divTask4.querySelector('blockquote');
			showNoteTask4(anchor, "bottom-in", "note bottom-in");
			assert.equal(anchor.getBoundingClientRect().bottom, divTask4.getElementsByClassName('noteTask4')[5].getBoundingClientRect().bottom);
		});
	});
});
