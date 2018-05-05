// Task 5. Create a tree from the object
function createTreeTask5v1(container, data) {
//		Create the HTML for the tree and then assign to container.innerHTML.
	let html = '';
	s(data);

	container.innerHTML = html;
	return container.innerHTML;
	
	function s(data) {
		html += '<ul>';
		for(let key in data) {
			html += '<li>';
			html += key;
			if(Object.values(data[key])) s(data[key]);
			html += '</li>';
		}
		html += '</ul>';
	}
}

function createTreeTask5v2(container, data) {
//		Create tree nodes and append with DOM methods.
	let ul = document.createElement('ul');
	s(data, ul);
	container.append(ul);
	
	return container.innerHTML;
	
	function s(data, node) {
		for(let key in data) {
			let li = document.createElement('li');
			li.append(key);
			node.append(li);
			if(Object.values(data[key])) {
				let ul = document.createElement('ul');
				li.append(ul);
				s(data[key], ul);
			}
		}
	}
}
// Done.