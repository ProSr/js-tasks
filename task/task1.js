// Task 1. Why "return false" doesn't work?
function auxiliaryHTMLtask1() {
	let divTask1 = document.createElement('div');
	divTask1.id = 'divTask1';
	divTask1.innerHTML = `<a href="http://w3.org" onclick="handler(event)">the browser will go to w3.org</a>`;
	document.body.prepend(divTask1);
}

handler = function(e) {
	alert( "..." );
	return false;
};

function solutionTask1() {
	return function(e) {
		alert( ". . ." );
		e.preventDefault();
	}
}
// Done.