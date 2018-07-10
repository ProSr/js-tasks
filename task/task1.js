// Task 1. Extended hotkeys
function solutionTask1() {
	let keysArray = [];
	document.onkeydown = keyDown;	
	document.onkeyup = keyUp;
	function keyDown(event) {
		keysArray.push(event.code);
		runOnKeys(func, keysArray);
	}
	function keyUp() {
		keysArray = [];
	}
	function runOnKeys(func, code_n) {
		if(code_n.includes('KeyQ') && code_n.includes('KeyW')) {
			keysArray = [];
			func(code_n);
		}
	}
	function func(...keys) {
		alert(keys.toString());
	}
}
// Done.