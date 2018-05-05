// Task 10. Sort the table
function addAuxiliaryTask10() {
	let div = document.createElement('div');
	div.id = 'div';
	div.insertAdjacentHTML('afterbegin', '<table><tr><th>Name</th><th>Surname</th><th>Age</th></tr><tr><td>John</td><td>Smith</td><td>10</td></tr><tr><td>Pete</td><td>Brown</td><td>15</td></tr><tr><td>Ann</td><td>Lee</td><td>5</td></tr></table>');
	document.body.append(div);
}
function solutionTask10() {
	let trCollection = div.firstChild.rows;
	let res = Array.from(trCollection);
	res.shift();
	res.sort((a, b) => a.firstChild.innerText > b.firstChild.innerText);
//	for(let node of res) div.firstChild.firstChild.append(node);
	div.firstChild.firstChild.append(...res);
}
// Done.

