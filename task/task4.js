// Task 4. Tooltip behavior
function auxiliaryHTMLtask4() {
	let wrapTask4 = document.createElement("div");
	wrapTask4.id = 'wrapTask4';
	wrapTask4.innerHTML = `<style>
		body {
		  height: 2000px;
		  /* make body scrollable, the tooltip should work after the scroll */
		}
		button {
			position: relative;
		}


		.tooltip {
		  /* some styles for the tooltip, you can use your own instead */
		  position: absolute;
		  padding: 10px 20px;
		  border: 1px solid #b3c9ce;
		  border-radius: 4px;
		  text-align: center;
		  font: italic 14px/1.3 arial, sans-serif;
		  color: #333;
		  background: #fff;
		  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
    }</style><p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p><p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p><button data-tooltip="the tooltip is longer than the element">Short button</button><button data-tooltip="HTML<br>tooltip">One more button</button><p>Scroll the page to make buttons appear on the top, check if the tooltips show up correctly.</p>`;
	document.body.prepend(wrapTask4);
}
function solutionTask4() {
	document.addEventListener('mouseover', showTooltip);
	document.addEventListener('mouseout', hideTooltip);
	
	function showTooltip(event) {

		if(!event.target.dataset.tooltip) return;
		let target = event.target,
			toolTip = document.createElement('div');
			toolTip.id = 'tooltip';
			toolTip.className = 'tooltip';
			toolTip.innerHTML = target.dataset.tooltip;
		target.append(toolTip);
		
		if(target.getBoundingClientRect().top >= tooltip.offsetHeight) tooltip.style.bottom = target.offsetHeight + 'px';
		else tooltip.style.top = target.offsetHeight + 'px';
		
		
		//получить 
	}
	function hideTooltip(event) {
		if(!event.target.dataset.tooltip) return;
		tooltip.remove();

	}
}
// Done.