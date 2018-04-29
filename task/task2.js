// Task 2. The sibling question
function testSibling(html) {
	let elem = document.createElement("div");
	elem.innerHTML = html;
	document.body.prepend(elem);
	let result1 = elem.lastChild.nextSibling,
		result2 = elem.children[0].previousSibling;
	
	document.body.removeChild(elem);
	
	return result1 === null && result2 === null;
}
