// Task 2. Up/down button
function auxiliaryHTMLtask2() {
	let divTask2 = document.createElement('div');
	divTask2.id = 'divTask2';
	divTask2.innerHTML = insertNumbersArray(0, 2000, 11);
	divTask2.append(insertToTheTop());
	divTask2.style.cssText = `
			position: relative;
			width: 500px;
			height: 300px;
			overflow-y: scroll;
			padding: 10px;
			background: rgba(255,255,255,.65);
			text-align: justify`;
	document.body.prepend(divTask2);
	function insertNumbersArray(start, end, stringLength) {
	let arr = [];
	for(start; start < end; start++) {
		arr.push(start);
	}
	return arr.join(' ');
}
	function insertToTheTop() {
		let toTheTop = document.createElement('div');
		toTheTop.id = 'toTheTop';
		toTheTop.innerText = '⬆';
		toTheTop.style.cssText = `
			position: fixed;
			top: 10px;
			left: 10px;
			color: green;
			font-size: 2em;
		`;
		toTheTop.hidden = true;
		toTheTop.onclick = () => divTask2.scrollTop = 0;
		return toTheTop;
}
}
function solutionTask2() {
	divTask2.onscroll = function(event) {
		let target = event.target;
		if(target.scrollTop > target.offsetHeight)
			toTheTop.hidden = false;
		else toTheTop.hidden = true;
	}
}
// Done.