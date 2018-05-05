// Task 4. Create a list
function createListTask4() {
	let ul = document.createElement('ul');
	for(let p = prompt(); p !== null; p = prompt()) {
		let li = document.createElement('li');
		li.append(p);
		ul.appendChild(li);
	}
	return ul;
}
// Done.


