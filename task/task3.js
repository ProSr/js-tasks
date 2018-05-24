// Task 3. Sortable table
function auxiliaryHTMLtask3() {
	let table = document.createElement('table');
	table.innerHTML = `<thead><tr><th data-type="number">Age</th><th data-type="string">Name</th></tr></thead><tbody><tr><td>25</td><td>Veda</td></tr><tr><td>24</td><td>Olesya</td></tr><tr><td>31</td><td>Kristy</td></tr><tr><td>29</td><td>Victory</td></tr><tr><td>32</td><td>Simona</td></tr></tbody>`;
	table.id = 'grid';
	
	let div = document.createElement('div');
	div.id = 'divTask3';
	div.innerHTML = `<style>
		table {
		   border-collapse: collapse;
		 }
		 th, td {
		   border: 1px solid black;
		   padding: 4px;
		 }
		 th {
		   cursor: pointer;
		 }
		 th:hover {
		   background: yellow;
		 }
	  </style>`;
	div.append(table);
	document.body.prepend(div);
}
function solutionTask3() {
	class Table {
		constructor(elem) {
			this._elem = elem;
			elem.onclick = this.onClick.bind(this);
		}

		number(index, trArray) {
			for(let node of trArray.sort((a, b) => a.children[index].innerText - b.children[index].innerText)) this._elem.tBodies[0].append(node);
		}

		string(index, trArray) {
			for(let node of trArray.sort((a, b) => {
				let nameA = a.children[index].innerText.toUpperCase(),
					nameB = b.children[index].innerText.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
			})) this._elem.tBodies[0].append(node);
		}

		onClick(event) {
			let type = event.target.dataset.type;
			if(type) {
			  this[type](event.target.cellIndex, [...grid.tBodies[0].childNodes], event);
		  }
		};
	}

	new Table(grid);
}
// Done.