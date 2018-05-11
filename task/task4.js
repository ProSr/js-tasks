// Task 4. Position the note inside (absolute)
function auxiliaryHtmlCssTask4(node) {
	node.innerHTML = `<style>
		body {
		  height: 2000px;
		}
		#f {
//		  position: relative;
		  padding-top: 500px;
		}
		.noteTask4 {
		  position: absolute;
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
	node.innerHTML += `<div id = "f"></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p><blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>`;
	node.id = 'divTask4';
	document.body.prepend(node);
}
function positionAtTask4(anchor, position, elem) {
	let ancCoord = getCoordsTask4(anchor);
	anchor.append(elem);
	switch(position) {
		case "top-out":
			elem.style.top = ancCoord.top - elem.offsetHeight + 'px';
			elem.style.left = ancCoord.left + 'px';
			break;
		case "bottom-out":
			elem.style.top = ancCoord.top + anchor.offsetHeight + 'px';
			elem.style.left = ancCoord.left + 'px';		
			break;
		case "right-out":
			elem.style.left = ancCoord.left + anchor.offsetWidth + 'px';
			elem.style.top = ancCoord.top + 'px';
			break;
		case "top-in":
			elem.style.top = ancCoord.top + 'px';
			elem.style.left = ancCoord.left + 'px';
			break;
		case "bottom-in":
			elem.style.top = ancCoord.top + anchor.offsetHeight - elem.offsetHeight + 'px';
			elem.style.left = ancCoord.left + 'px';		
			break;
		case "right-in":
			elem.style.left = ancCoord.left + anchor.offsetWidth - elem.offsetWidth + 'px';
			elem.style.top = ancCoord.top + 'px';
			break;
	}
	anchor.append(elem);
}
function showNoteTask4(anchor, position, html) {
	let elem = document.createElement('div');
	elem.className = 'noteTask4';
	elem.innerHTML = html;
	positionAtTask4(anchor, position, elem);
}
function getCoordsTask4(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
	};
}
// Done.