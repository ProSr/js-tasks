// Task 2. Add the decorating "defer()" to functions
function f2(a, b) {
	
	alert( a + b );
}
f2.__proto__.defer2 = function(ms) {
	let f = this;
	return function(...args) {
		setTimeout(() => f.apply(this, args), ms);
	}
};
/*
f2.__proto__.defer2 = function(ms) {
	return function(a, b) {
		setTimeout(() => f2(a, b), ms);
	}
};
*/

// Done