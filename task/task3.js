// Task 3. Place the ball in the field center
function auxiliaryHTMLtask3(id = 'field') {
	let div = document.createElement('div');
	div.id = id;
	
	inputAuxiliaryCSStask3(div);
	
	let i = document.createElement('img');
	i.id = 'ball';
	i.src = 'https://en.js.cx/clipart/ball.svg';
	div.append(i, ' . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .');
	i.style.position = 'absolute';
	i.style.width = '40px';
	i.style.height = '40px';
	
	document.body.append(div);
	
	function inputAuxiliaryCSStask3(node) {
		node.style.width = '200px';
		node.style.border = '10px groove black';
		node.style.backgroundColor = '#00ff00';
		node.style.position = 'relative';
	}
}
function solutionTask3() {
	ball.style.left = `${Math.round(field.clientWidth/2 - ball.offsetWidth/2)}px`;
	ball.style.top = `${Math.round(field.clientHeight/2 - ball.offsetHeight/2)}px`;
}
// Done.