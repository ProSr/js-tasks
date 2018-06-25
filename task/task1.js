// Task 1. Improved tooltip behavior
function auxiliaryHTMLtask1() {
	let divTask1 = document.createElement('div');
	divTask1.id = "divTask1";
	divTask1.innerHTML = `<style>
		body {
		  height: 2000px;
		  /* the tooltip should work after page scroll too */
		}

		.tooltip {
		  position: fixed;
		  z-index: 100;

		  padding: 10px 20px;

		  border: 1px solid #b3c9ce;
		  border-radius: 4px;
		  text-align: center;
		  font: italic 14px/1.3 arial, sans-serif;
		  color: #333;
		  background: #fff;
		  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
		}

		#house {
		  margin-top: 50px;
		  width: 400px;
		  border: 1px solid brown;
		}

		#roof {
		  width: 0;
		  height: 0;
		  border-left: 200px solid transparent;
		  border-right: 200px solid transparent;
		  border-bottom: 20px solid brown;
		  margin-top: -20px;
		}

		p {
		  text-align: justify;
		  margin: 10px 3px;
		}
	</style>`;
	divTask1.innerHTML += `<div data-tooltip="Here is the house interior" id="house"><div data-tooltip="Here is the roof" id="roof"></div><p>Once upon a time there was a mother pig who had three little pigs.</p><p>The three little pigs grew so big that their mother said to them, "You are too big to live here any longer. You must go and build houses for yourselves. But take care that the wolf does not catch you."<p>The three little pigs set off. "We will take care that the wolf does not catch us," they said.</p><p>Soon they met a man. <a href="https://en.wikipedia.org/wiki/The_Three_Little_Pigs" data-tooltip="Read on…">Hover over me</a></p></div>`;
	document.body.prepend(divTask1);
}
/*
// Данный метод неверно работает с вложенными элементами, тк после попадания курсора на них, новые события перезаписывают поведение родительских, поэтому, после события mouseleave с таких элементов, мы перестаём видеть тултипы родительских, так как их перезаписанные тултипы вложенными тултипами стираются, а ожидаемые тултипы не появляются, поскольку мы находимся внутри элементов, не покидаем их, и поэтому события на них не срабатывают. Кроме того, если внутри 
function solutionTask1() {
	for(let elem of document.querySelectorAll('[data-tooltip]')) {
		elem.onmouseenter = showTooltip;
		elem.onmouseleave = hideTooltip;
	}
	
	let tooltip = document.createElement('div');
	tooltip.className = 'tooltip';
	
	function showTooltip(e) {
		
		let target = e.target,
			coords = target.getBoundingClientRect(),
			top,
			left;
		
		tooltip.innerText = target.dataset.tooltip;
		
		
		left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
		if (left < 0) left = 0;
		
		top = coords.top - tooltip.offsetHeight - 5;
		if (top < 0) top = coords.top + target.offsetHeight + 5;
		
		tooltip.style.left = left + 'px';
		tooltip.style.top = top + 'px';
		
		document.body.append(tooltip);
	}
	function hideTooltip(e) {
		tooltip.remove();
	}
}
*/

function solutionTask1() {
	divTask1.onmouseover = showTooltip;
	divTask1.onmouseout = hideTooltip;
	
	let tooltip;
	function showTooltip(e) {
		
		let target = e.target.closest('[data-tooltip]');
		if (!target || !divTask1.contains(target)) return;
		
		let coords = target.getBoundingClientRect(),
			top,
			left;
		
		tooltip = document.createElement('div');
		tooltip.className = 'tooltip';
		tooltip.innerText = target.dataset.tooltip;
		document.body.append(tooltip);
		
		
		left = coords.left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;
		if (left < 0) left = 0;
		
		top = coords.top - tooltip.offsetHeight - 5;
		if (top < 0) top = coords.top + target.offsetHeight + 5;
		
		
		tooltip.style.left = left + 'px';
		tooltip.style.top = top + 'px';
		
	}
	function hideTooltip(e) {
		if (tooltip) {
			tooltip.remove();
			tooltip = false;
		  }
		
	}
}
// Done.