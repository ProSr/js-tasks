// Task 2. "Smart" tooltip
function auxiliaryHTMLtask2() {
	let divTask2 = document.createElement('div');
	divTask2.id = 'divTask2';
	divTask2.innerHTML = `<style>
		.hours {
		  color: red;
		}

		.minutes {
		  color: green;
		}

		.seconds {
		  color: blue;
		}

		.clock {
		  border: 1px dashed black;
		  padding: 5px;
		  display: inline-block;
		  background: white;
		  position: absolute;
		  left: 0;
		  top: 0;
		}

		.tooltip {
		  position: absolute;
		  background: #eee;
		  border: 1px lightgray solid;
		  padding: 3px;
		  border-radius: 5px;
		  box-shadow: 3px 3px 3px lightgray;

		}</style>`;
	divTask2.innerHTML += `<div id="elem" class="clock">
    	<span class="hours">12</span> :
		<span class="minutes">30</span> :
		<span class="seconds">00</span>
	</div><div id="tooltip" class="tooltip" hidden>Tooltip</div>`;

	document.body.prepend(divTask2);
}
function solutionTask2() {
	setTimeout(function() {
		new HoverIntent({
		  elem,
		  over() {
          	tooltip.hidden = false;
			tooltip.style.top = document.body.scrollHeight + this.elem.getBoundingClientRect().top + this.elem.offsetHeight + 5 + 'px';
		  },
			out() {
				tooltip.hidden = true;
			}
		});
	}, 2000);
}
// Done.