// Task 2. Count descendants
function makeHTMLtask2(form) {
	if(arguments.length > 1) {
		document.body.removeChild(form);
	} else {
	form.innerHTML = '<ul> <li>Animals <ul> <li>Mammals <ul> <li>Cows</li> <li>Donkeys</li> <li>Dogs</li> <li>Tigers</li> </ul> </li> <li>Other <ul> <li>Snakes</li> <li>Birds</li> <li>Lizards</li> </ul> </li> </ul> </li> <li>Fishes <ul> <li>Aquarium <ul> <li>Guppy</li> <li>Angelfish</li> </ul> </li> <li>Sea <ul> <li>Sea trout</li> </ul> </li> </ul> </li> </ul>';
	form.setAttribute("id", "form");
	document.body.prepend(form);
	}
}
function getLi(form) {
	for(let text of form.querySelectorAll('li')) alert(text.firstChild.wholeText.trim() + ': ' + Array.from(text.getElementsByTagName('li')).length);
}
// Done.