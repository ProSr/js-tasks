// Task 3. Which handlers run?
function auxiliaryHTMLtask3() {
	let button = document.createElement('button');
	button.id = 'button';
	button.innerText = 'button';
	button.addEventListener("click", () => alert("1"));
	button.removeEventListener("click", () => alert("1"));
	button.onclick = () => alert(2);
	document.body.append(button);
}
// Done.