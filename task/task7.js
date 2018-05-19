// Task 7. Carousel 
function auxiliaryHTMLtask7() {
	let dT7 = document.createElement('div');
	dT7.id = 'dT7';
	dT7.innerHTML = `<button class="arrow" style= "left: 2px; top: 40px" onclick = "moveLeftCarouselTask7()">⇦</button><button class="arrow" style= "left: 410px; top: 12px" onclick = "moveRightCarouselTask7()">⇨</button><ul><li><img src="https://en.js.cx/carousel/1.png"></li><li><img src="https://en.js.cx/carousel/2.png"></li><li><img src="https://en.js.cx/carousel/3.png"></li><li><img src="https://en.js.cx/carousel/4.png"></li><li><img src="https://en.js.cx/carousel/5.png"></li><li><img src="https://en.js.cx/carousel/6.png"></li><li><img src="https://en.js.cx/carousel/7.png"></li><li><img src="https://en.js.cx/carousel/8.png"></li><li><img src="https://en.js.cx/carousel/9.png"></li><li><img src="https://en.js.cx/carousel/10.png"></li></ul><style>
		#dT7 .arrow {
		  padding: 0;
		  background: #ddd;
		  border-radius: 15px;
		  border: 1px solid gray;
		  font-size: 24px;
		  line-height: 24px;
		  color: #444;
		  display: block;
		  position: relative;
		  z-index: 1;
		}

		#dT7 .arrow:focus {
		  outline: none;
		}

		#dT7 .arrow:hover {
		  background: #ccc;
		  cursor: pointer;
		}

		#dT7 ul {
		  height: 130px;
		  width: 9999px;
		  margin: 0;
		  padding: 0;
		  list-style: none;
		  font-size: 0;
		}

			#dT7 ul {
			  position: absolute;
			  top: 0px;
			  background: lightgray;
			  border: 1px solid gray;
			  border-radius: 15px;
			  width: 390px;
			  padding-left: 25px;
			  padding-right: 25px;
			  overflow: auto;
			}


		#dT7 ul img {
		  width: 130px;
		  height: 130px;
		  display: block; /* removes extra space near images */
		}

		#dT7 ul li {
		  display: inline-block;
		  position = relative;
		}</style>`;
	document.body.prepend(dT7);
	let i = 1;
    for(let li of dT7.querySelectorAll('li')) {
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }
}
function moveLeftCarouselTask7(e, x = -130) {
  document.getElementsByTagName('ul')[0].scrollTop += x;
}
function moveRightCarouselTask7(e, x = 130) {
  document.querySelector('ul').scrollTop += x;
}
// Done.