// Task 1. Selectable list
function auxiliaryHTMLtask1() {
	let d = document.createElement('div');
	d.innerHTML = `<style>
		.selected {
		  background: #0f0;
		}

		li {
		  cursor: pointer;
		}
	</style>`;
	d.innerHTML += `Click on a list item to select it.<br><ul id="ul"><li>Christopher Robin</li><li>Winnie-the-Pooh</li><li>Tigger</li><li>Kanga</li><li>Rabbit. Just rabbit.</li></ul>`;
	d.id = 'divTask1';
	document.body.prepend(d);
/*
	ul.style.userSelect = 'none'; // First solution. it works
*/
}
function solutionTask1() {
	ul.onmousedown = e => e.preventDefault();  // Third solution. it works. It's the best solution
	ul.onclick = function(e) {
/*
		getSelection().removeAllRanges(); // Second solution. it works
*/
		if(e.ctrlKey || e.metaKey) e.target.classList.toggle('selected');
		else {
			[...e.currentTarget.children].forEach(item => item.classList.remove('selected'));
			e.target.classList.toggle('selected');
		}
	};
}
// Done.