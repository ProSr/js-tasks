// Task 1. Finally or just the code?
function b() {
	try {
		let l = 'this' + variable + always + 'breaks down';
	} catch (e) {
//		(e instanceof EvalError) ? alert('this "alert" will never used') : blabla(); 
		throw e;
	} finally {
		alert('in that task, must be only one \'alert\' message');
	}
}

function a() {
	b();
	alert('in that task, must be only one \'alert\' message');
}
// Done 