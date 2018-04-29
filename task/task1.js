// Task 1. DOM children
function makeHTML() {
	let div = document.createElement("div");
	
	return function(x) {
		if(!x) {
			div.innerHTML = "<div>Users:</div><ul><li>John</li><li>Pete</li></ul>";
			document.body.prepend(div);
		} else { document.body.removeChild(div); }
	}
}

function assertEqual(a, b) {
	
	let d =	makeHTML();
	d();
	assert.equal(document.body.a, b);
	d("delete");
}
// Done

