// Task 4. Move the ball across the field
function auxiliaryHTMLtask4() {
	let dT4 = document.createElement('div');
	dT4.id = 'dT4';
	dT4.innerHTML = `<style>
			body {
				height: 2000px;
			}
			#field {
				width: 200px;
				height: 150px;
				border: 10px solid black;
				background-color: #00FF00;
				overflow: hidden;position: absolute;
			}
			#ball {
				position: absolute;
				transition: .5s ease-out 0.25s;
			}
		</style>Click on a field to move the ball there.
  <br> The ball should never leave the field.<div id="field"><img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>`;
	document.body.prepend(dT4);

	ball.style.top = field.getBoundingClientRect().top + field.clientTop + pageYOffset + 'px';
	ball.style.left = field.getBoundingClientRect().left + field.clientLeft + pageXOffset + 'px';
}
function solutionTask4() {
	function moveBall(e) {
		let l = e.clientX - ball.offsetWidth/2,
			t = e.clientY - ball.offsetHeight/2,
			coords = field.getBoundingClientRect(),
			
			lCh = coords.left + field.clientLeft,
			tCh = coords.top + field.clientTop,
			rCh = coords.left + field.clientLeft + field.clientWidth,
			bCh = coords.top + field.clientTop + field.clientHeight;
		
		if(l < lCh) l = lCh;
		if(t < tCh) t = tCh;
		if(l + ball.offsetWidth > rCh) l = rCh - ball.offsetWidth;
		if(t + ball.offsetHeight > bCh) t = bCh - ball.offsetHeight;

		ball.style.left = l + pageXOffset + 'px';
		ball.style.top = t + pageYOffset + 'px';
	}
	field.onclick = moveBall;
}
// Done.