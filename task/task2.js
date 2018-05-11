// Task 2. Show a note near the element
function auxiliaryHtmlCssTask2(node) {
	node.innerHTML = `<style>
		.note {
		  position: fixed;
		  z-index: 1000;
		  padding: 5px;
		  border: 1px solid black;
		  background: white;
		  text-align: center;
		  font: italic 14px Georgia;
		}

		blockquote {
		  background: #f9f9f9;
		  border-left: 10px solid #ccc;
		  margin: 0 0 0 100px;
		  padding: .5em 10px;
		  display: inline-block;
		  white-space: pre;
		}

		blockquote:before {
		  color: #ccc;
		  content: open-quote;
		  font-size: 4em;
		  line-height: .1em;
		  margin-right: .25em;
		  vertical-align: -.4em;
		}</style>`;
	node.innerHTML += `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p><blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>`;
	node.id = 'div';
	document.body.prepend(node);
}
function positionAtTask2(anchor, position, elem) {
	let ancCoord = anchor.getBoundingClientRect();
	anchor.append(elem);
	switch(position) {
		case "top":
			elem.style.top = ancCoord.top - elem.offsetHeight + 'px'
			elem.style.left = ancCoord.left + 'px' ;
			break;
		case "bottom":
			elem.style.top = ancCoord.top + anchor.offsetHeight + 'px' ;
			elem.style.left = ancCoord.left + 'px' ;		
			break;
		case "right":
			elem.style.left = ancCoord.right + 'px';
			elem.style.top = ancCoord.top + 'px';
			break;
	}
}
function showNoteTask2(anchor, position, html) {
	let elem = document.createElement('div');
	elem.className = 'note';
	elem.innerHTML = html;
	positionAtTask2(anchor, position, elem);
}
// Done.