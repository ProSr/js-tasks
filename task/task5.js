// Task 5. Create a menu sliding menu
function auxiliaryHTMLtask5() {
	let divTask5 = document.createElement('div');
	divTask5.innerHTML = `<style>
		span::before {
		  color: green;
		}
		span.t::before {
			content: "▶ ";
		}
		span.o::before {
			content: "▼ ";
		}
		ul.t {
			display: none;
		}
		ul.o {
			display: block;
		}
		ul {
		  margin: 0;
		  padding-left: 2ch;
		}
		li {
		  list-style: none;
		}</style><span class = "t">Sweeties (click me)!</span><ul class = "t"><li>Cake</li><li>Donut</li><li>Honey</li></ul>`;
	divTask5.id = 'divTask5';
	
	document.body.append(divTask5);
}
function solutionTask5()  {
	let toggleNode = document.querySelector('span.t');
	toggleNode.onclick = toggleSwitch
	function toggleSwitch(e) {
		Array.from(divTask5.querySelectorAll('.t')).forEach(e => e.classList.toggle('o'));
	}
}
// Done.
/*
// Task 5. Create a menu sliding menu
function auxiliaryHTMLtask5() {
	let divTask5 = document.createElement('div');
	divTask5.innerHTML = `<style>
		span::before {
		  color: green;
		}
		span[data-before="closed"]::before {
			content: "▶ ";
		}
		span[data-before="opened"]::before {
			content: "▼ ";
		}
		ul[data-before="closed"] {
			display: none;
		}
		ul[data-before="opened"] {
			display: block;
		}
		ul {
		  margin: 0;
		  padding-left: 2ch;
		}
		li {
		  list-style: none;
		}</style><span data-before="closed">Sweeties (click me)!</span><ul data-before="closed"><li>Cake</li><li>Donut</li><li>Honey</li></ul>`;
	divTask5.id = 'divTask5';
	
	document.body.append(divTask5);
}
function solutionTask5()  {
	let parentNode = document.querySelectorAll('[data-before]');
	parentNode[0].onclick = togglerSweeties;
	function togglerSweeties(e) {
		for(let node of parentNode) {
			switch (node.dataset.before) {
				case 'closed':
					node.dataset.before = 'opened';
					break;
				case 'opened':
					node.dataset.before = 'closed';
					break;
			}
		}
	}
}
// Done.
*/
