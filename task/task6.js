// Task 6. Show descendants in a tree
function solutionTask6(ul) {
	let nodes = ul.getElementsByTagName('li');
	for(let node of nodes) {
		if(hasUl(node)) addN(node, node.firstChild.nodeValue, node.getElementsByTagName('li').length);
	}
	function hasUl(node) {
		return node.querySelector('ul');
	}
	function addN(node, text, n) {
		let str = text + ' [' + n + ']';
		node.firstChild.remove();
		node.prepend(str);
	}
}

// Done.

