// Task 2. Clear the element
let elemTask2 = document.createElement('ol');
elemTask2.append('<ol id="elem">  <li>Hello</li>  <li>World</li></ol>');
function clearTask2(elem) {
	return elem.innerText = '';
}
// Done.