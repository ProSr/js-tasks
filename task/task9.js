// Task 9. Insert the HTML in the list
function addAuxiliaryElementsTask9() {
	let task9 = document.createElement('div');
	task9.id = 'task9';
	task9.insertAdjacentHTML('afterbegin', '<ul id="ul"><li id="one">1</li><li id="two">4</li></ul>');
	document.body.append(task9);
}
function solutionTask9() {
	let li2 = document.createElement('li'),
		li3 = document.createElement('li');
	li2.innerText = '2';
	li3.innerText = '3';
	li2.id = 'li2';
	li3.id = 'li3'
	one.after(li2);
	two.before(li3);
}
// Done.