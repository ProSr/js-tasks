// Task 1. Endless page
function auxiliaryHTMLtask1() {
	const divTask1 = document.createElement('div');
	divTask1.id = 'divTask1';
	divTask1.innerHTML = '<h1>Scroll me</h1>';
	divTask1.style.cssText = `
				position: relative;
				width: 500px;
				height: 300px;
				overflow-y: scroll;
				padding: 10px;
				background: rgba(255,255,255,.65);`;
	document.body.prepend(divTask1);
	while(document.getElementById('divTask1').lastElementChild.getBoundingClientRect().bottom < document.getElementById('divTask1').getBoundingClientRect().bottom)
		divTask1.insertAdjacentHTML('beforeend', `<p>Date: ${new Date()}</p>`);
}
function solutionTask1() {
	divTask1.addEventListener('scroll', function() {
		if(divTask1.scrollTop + divTask1.offsetHeight > divTask1.scrollHeight - 100)
			divTask1.insertAdjacentHTML('beforeend', `<p>Date: ${new Date()}</p>`);
	});
}
// Done.