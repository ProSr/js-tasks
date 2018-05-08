// Task 2. What is the scrollbar width?
function auxiliaryHTMLtask2(id) {
	let div = document.createElement('div');
	div.id = id;
	
	inputloremIpsumTask2(div);
	inputAuxiliaryCSStask2(div);
	
	document.body.append(div);
	
	function inputloremIpsumTask2(node) {
		node.innerHTML = '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
		node.innerText += node.innerText;
		node.innerText += node.innerText;
		node.innerText += node.innerText;
	}
	function inputAuxiliaryCSStask2(node) {
		node.style.width = '500px';
		node.style.height = '750px';
		node.style.background = 'lightgray';
		node.style.borderRadius = '2px solid grey';
		node.style.borderRadius = '15px';
		node.style.padding = '5px';
		node.style.overflow = 'auto';
	}
}
// Done.