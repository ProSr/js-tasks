// Task 1. Hide on click
function auxiliaryHTMLtask1(d) {
	let wrapper = document.createElement('div'),
		input = document.createElement('input'),
		text = document.createElement('div');
	
	wrapper.id = 'wrapper';
	text.id = text.innerText = 'text';
	input.id = input.type = 'button';
	input.value = 'click to hide the text';
	
	document.body.append(wrapper);
	wrapper.append(input, text);
}
function solutionTask1(state) {
		button.onclick = () => text.hidden = state;
}

// Done. <div id="text">