// Task 1. Create a notification
function auxiliaryHTMLtask1(className) {
	let style = document.head.querySelector('style');
	style.innerHTML += `
.${className} { display: none; }`;
}
function auxiliaryCSStask1(tag) {
	tag.id = 'div';
	tag.style.background = 'orange';
	tag.style.padding = '5px';
	tag.style.border = '2px solid red';
	tag.style.position = 'absolute';
	tag.style.zIndex = '1';
}
function showNotification({ top, right, html, className }) {
		
	let toggler,
		i = 0,
		tag = document.createElement('div');
	
	auxiliaryHTMLtask1(className);
	auxiliaryCSStask1(tag);

	tag.style.top = `${top}px`;
	tag.style.right = `${right}px`;
	tag.className = className;
	
	document.body.append(tag);
	
	toggler = setInterval(() => {
		if(i > 2) {
			return clearInterval(toggler);
		}
		div.innerHTML = `${html} ${++i}`;
		div.classList.toggle(className);
		return setTimeout(() => div.classList.toggle(className), 1000); }, 1500);
}
// Done.