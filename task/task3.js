// Task 3. Select all diagonal cells
function makeTable() {
	let t = document.createElement('table');
	t.innerHTML = "<tr><td>1:1</td><td>2:1</td><td>3:1</td><td>4:1</td><td>5:1</td></tr><tr><td>1:2</td><td>2:2</td><td>3:2</td><td>4:2</td><td>5:2</td></tr><tr><td>1:3</td><td>2:3</td><td>3:3</td><td>4:3</td><td>5:3</td></tr><tr><td>1:4</td><td>2:4</td><td>3:4</td><td>4:4</td><td>5:4</td></tr><tr><td>1:5</td><td>2:5</td><td>3:5</td><td>4:5</td><td>5:5</td></tr>";
	document.body.prepend(t);
}
function paintTd(table) {

	let i = 0;
	for(let tr of table.rows) {
			tr.cells[i++].style.backgroundColor = "red";
	}
}
// Done 
