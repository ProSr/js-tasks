// Task 1. Get the attribute
function makeTask1() {
	let task1 = document.createElement('div');
	task1.dataset.widgetName = 'menu';
	task1.innerText = 'Choose the genre';
	task1.id = 'task1'
	document.body.append(task1);
}

function removeTask1() {
	document.body.removeChild(task1)
}
// Done

