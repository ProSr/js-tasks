// Task 1. Find window coordinates of the field
function auxiliaryHtmlCssTask1() {
	
	let div  = document.createElement('div');
	div.id = 'div';
	div.innerHTML = `Click anywhere to get window coordinates.<br>That's for testing, to check the result you get by JavaScript.<br><div id="coords">(click coordinates show up here)</div><div id="field"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>\
<div class="triangle-right" style="left:-20px;top:-176px">1</div>\
<div class="triangle-right" style="left:-10px;top:-178px">3</div>\
<div class="triangle-right" style="left:190px;top:-40px">4</div>\
<div class="triangle-right" style="left:200px;top:-42px">2</div>`;
	document.body.append(div);
	div.insertAdjacentHTML('afterbegin', `<style>
		body {
		  padding: 20px 0 0 20px;
		  cursor: pointer;
		}

		#field {
		  overflow: hidden;
		  width: 200px;
		  height: 150px;
		  border-top: 10px solid black;
		  border-right: 10px solid gray;
		  border-bottom: 10px solid gray;
		  border-left: 10px solid black;
		  background-color: #00FF00;
		  font: 10px/1.2 monospace;
		}

		.triangle-right {
		  position: relative;
		  width: 0;
		  height: 0;
		  border-top: 6px solid transparent;
		  border-bottom: 6px solid transparent;
		  border-left: 20px solid red;
		  text-indent: -20px;
		  font: 12px/1 monospace;
		}</style>`);
	document.onclick = function(e) { // shows click coordinates
      coords.innerHTML = e.clientX + ':' + e.clientY;
    };
}
function auxiliaryHtmlCssTask1remove() {
	document.onclick = '';
	div.remove();
}

function leftUpperOuterCornerRelativeWindowTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
		top: box.top,
		left: box.left
	};
}
function leftUpperOuterCornerRelativeDocumentTask1(node) {
	let box = node.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}
function RightBottomOuterCornerRelativeWindowTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
// right solution
		top: box.bottom,
		left: box.right,
/* my solution
		top: box.top + node.offsetHeight,
		left: box.left + node.offsetWidth
*/
	};
}
function RightBottomOuterCornerRelativeDocumentTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
// right solution
		top: box.bottom + pageYOffset,
		left: box.right + pageXOffset,
/* my solution
		top: box.top + node.offsetHeight + pageYOffset,
		left: box.left + node.offsetWidth + pageXOffset
*/
	};
}
function LeftUpperInnerCornerRelativeWindowTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
		top: box.top + node.clientTop,
		left: box.left + node.clientLeft
	};
}
function LeftUpperInnerCornerRelativeDocumentTask1(node) {
	let box = node.getBoundingClientRect();
	return {
		top: box.top + node.clientTop + pageYOffset,
		left: box.left + node.clientLeft + pageXOffset
	};
}
function RightBottomInnerCornerRelativeWindowTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
// right solution
		top: box.top + parseInt(getComputedStyle(node).borderBottomWidth),
		left: box.left + parseInt(getComputedStyle(node).borderRightWidth),
/* my solution
		top: box.top + node.offsetHeight - node.clientHeight - node.clientTop - (node.offsetHeight - node.clientHeight - node.clientTop * 2),
		left: box.left + node.offsetWidth - node.clientWidth - node.clientLeft - (node.offsetWidth - node.clientWidth - node.clientLeft * 2)
*/
	};
}
function RightBottomInnerCornerRelativeDocumentTask1(node) {
	let box = node.getBoundingClientRect();
	return { 
// right solution
		top: box.top + parseInt(getComputedStyle(node).borderBottomWidth) + pageYOffset,
		left: box.left + parseInt(getComputedStyle(node).borderRightWidth) + pageXOffset
/* my solution
		top: box.top + node.offsetHeight - node.clientHeight - node.clientTop - (node.offsetHeight - node.clientHeight - node.clientTop * 2) + pageYOffset,
		left: box.left + node.offsetWidth - node.clientWidth - node.clientLeft - (node.offsetWidth - node.clientWidth - node.clientLeft * 2) + pageXOffset
*/
	};
}
// Done.