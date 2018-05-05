// Task 8. Colored clock with setInterval
function addAuxiliaryElementsTask8() {
	let div = document.createElement('div'),
		start = document.createElement('input'),
		stop = document.createElement('input'),
		clock = document.createElement('div');
	
	clock.id = 'clock';
	clock.innerHTML = '<span id = "hours" style = "color: red">ЧЧ</span>:<span id = "minutes" style = "color: green">ММ</span>:<span id = "seconds" style = "color: blue">СС</span>';
	
	div.id = 'div';
	div.append(start, stop);
	
	start.type = 'button';
	stop.type = 'button';
	
	start.value = 'start';
	stop.value = 'stop';
	
	start.setAttribute('onclick', 'clockStart()');
	stop.setAttribute('onclick', 'clockStop()');
	
	div.append(clock);
	document.body.append(div);
}
function time() {
		let d = new Date();
		hours.innerText = d.getHours();
		minutes.innerText = d.getMinutes();
		seconds.innerText = d.getSeconds();
	}
function clockStart() {
	time();
	window.setTime = setInterval(time, 1000);
	document.querySelector('start').setAttribute('hiddden', true);
	document.getElementsByName('stop')[0].setAttribute('hiddden', false);
}
function clockStop() {
	clearInterval(window.setTime);
	document.getElementsByName('stop')[0].setAttribute('hiddden', true);
	document.getElementsByName('start')[0].setAttribute('hiddden', false);
}
// Done.