// Task 3. Image gallery
function auxiliaryHTMLtask3() {
	let divTask3 = document.createElement('div');
	divTask3.id = 'divTask3';
	divTask3.style.display = 'inline-block';
	divTask3.innerHTML = `<style>
		body {
		  margin: 0;
		  padding: 0;
		  font: 75%/120% Arial, Helvetica, sans-serif;
		}

		h2 {
		  font: bold 190%/100% Arial, Helvetica, sans-serif;
		  margin: 0 0 .2em;
		}

		h2 em {
		  font: normal 80%/100% Arial, Helvetica, sans-serif;
		  color: #999999;
		}

		#largeImg {
		  border: solid 1px #ccc;
		  width: 550px;
		  height: 400px;
		  padding: 5px;
		}

		#thumbs a {
		  border: solid 1px #ccc;
		  width: 100px;
		  height: 100px;
		  padding: 3px;
		  margin: 2px;
		  float: left;
		}

		#thumbs a:hover {
		  border-color: #FF9900;
		}
	</style>`;
	divTask3.innerHTML += `<p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p><ul id="thumbs"><li><a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a></li><li><a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a></li><li><a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a></li><li><a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a></li><li><a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a></li></ul>`;
	document.body.prepend(divTask3);
}
function solutionTask3() {
	divTask3.lastElementChild.onclick = function(event) {
		let target = event.target.closest('a');
		if(target) {
			largeImg.src = target.href;
			return false;
		}
	}
}
// Done.