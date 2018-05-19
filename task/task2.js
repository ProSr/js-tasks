// Task 2. Hide self
function auxiliaryHTMLtask2() {
	let input = document.createElement("input");
	input.id = "input";
	input.type = "submit";
	input.value = "Click to hide";
	document.body.append(input);
	function inputToggler() { this.hidden = true };
	input.onclick = inputToggler;
}
// Done.