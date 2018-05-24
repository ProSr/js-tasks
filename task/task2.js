// Task 2. Tree menu
function auxiliaryHTMLtask2() {
	let ul = document.createElement('ul');
	ul.className = 'tree';
	ul.id = 'tree';
	ul.innerHTML = `<style>
			li > span {
				display: inline-block;
			}
			li > span:hover {
				font-weight: bold;
				cursor: pointer;
			}
	</style>`;
	ul.innerHTML += `<li><span>Animals</span><ul><li><span>Mammals</span><ul><li><span>Cows</span></li><li><span>Donkeys</span></li><li><span>Dogs</span></li><li><span>Tigers</span></li></ul></li><li><span>Other</span><ul><li><span>Snakes</span></li><li><span>Birds</span></li><li><span>Lizards</span></li></ul></li></ul></li><li><span>Fishes</span><ul><li><span>Aquarium</span><ul><li><span>Guppy</span></li><li><span>Angelfish</span></li></ul></li><li><span>Sea</span><ul><li><span>Sea trout</span></li></ul></li></ul></li>`;
	document.body.prepend(ul);
}
function solutionTask2() {
	tree.addEventListener('click', hideSiblingNode);
	function hideSiblingNode(event) {
		let target = event.target;
		
		if(target.nodeName !== 'SPAN') return;
		
		let toggleElement = event.target.nextElementSibling;
		if(toggleElement === null) return;

		toggleElement.hidden = !toggleElement.hidden;
	}
}
// Done.