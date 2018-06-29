// Task 1. Slider
function auxiliaryHTMLtask1() {
  let divTask1 = document.createElement('div');
  divTask1.id = 'divTask1';
  
  divTask1.innerHTML = `<style>
    .slider {
      border-radius: 5px;
      background: #E0E0E0;
      background: linear-gradient(left top, #E0E0E0, #EEEEEE);
      width: 310px;
      height: 15px;
      margin: 5px;
    }
    .thumb {
      width: 10px;
      height: 25px;
      border-radius: 3px;
      position: relative;
      left: 10px;
      top: -5px;
      background: blue;
      cursor: pointer;
    }
  </style><div id="slider" class="slider"><div class="thumb"></div></div>`;
  document.body.prepend(divTask1);
}
function solutionTask1() {
	kantorSolution();
//	myFirstSolution();
//	mySecondSolution();
	
	function mySecondSolution() {
		 let currentDroppable = null;

		let thumb = document.querySelector('.thumb');

		thumb.onmousedown = function(event) {

		  let shiftX = event.clientX - thumb.getBoundingClientRect().left,
			  sliderGBCR = slider.getBoundingClientRect(),
			  eventClientY = (sliderGBCR.bottom - sliderGBCR.top) / 2;

		  moveAt(event.pageX);

		  function moveAt(pageX) {
			thumb.style.left = pageX - shiftX - sliderGBCR.left + 'px';
		  }

		  function onMouseMove(event) {
			if(checkState(event)) moveAt(event.pageX);
			thumb.hidden = true;
			let elemBelow = document.elementFromPoint(event.clientX, eventClientY);
			thumb.hidden = false;

			if (!elemBelow) return;

			let droppableBelow = elemBelow.closest('.slider');
			if (currentDroppable != droppableBelow) {
			  if (currentDroppable) {
				leaveDroppable(currentDroppable);
			  }
			  currentDroppable = droppableBelow;
			  if (currentDroppable) {
				enterDroppable(currentDroppable);
			  }
			}
		  }

		  document.addEventListener('mousemove', onMouseMove);

		  document.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove);
			thumb.onmouseup = null;
		  }
		  function checkState(e) {
			let t = thumb.getBoundingClientRect();
			if(t.left <= sliderGBCR.left - shiftX) {
			  moveAt(0);
			  return false;
			} else if(t.right - shiftX >= sliderGBCR.right) {
			  moveAt(sliderGBCR.right - sliderGBCR.left - thumb.offsetWidth);
			  return false;
			} else return true;
		  }
		};
		function leaveDroppable(elem) {

		};
		function enterDroppable(elem) {

		};
		thumb.ondragstart = function() {
		  return false;
		};


	}
	function myFirstSolution() {
    
		document.querySelector('.thumb').onmousedown = function(e, thumb = document.querySelector('.thumb')) {
		  event.preventDefault();
		  let shiftX = e.clientX - thumb.getBoundingClientRect().left,
			  s = slider.getBoundingClientRect();
		  checkState(e);

		  function checkState(e) {
			let t = thumb.getBoundingClientRect();
			if(t.left < s.left - shiftX) moveAt(0);
			else if(t.right - shiftX > s.right) moveAt(s.right - s.left - thumb.offsetWidth);
			else moveAt(e.pageX - s.left - shiftX);
		  }

		  function moveAt(pageX) {
			thumb.style.left = pageX + 'px';
		  }

		  document.onmousemove = function(e, t = thumb.getBoundingClientRect()) {
			if(!(t.left < s.left - shiftX) && !(t.right - shiftX > s.right)) checkState(e);
		  };

		  document.onmouseup = function() {
			document.onmousemove = '';
			document.onmouseup = '';
		  };
		};
		thumb.ondragstart = function() {
		  return false;
		};

	}
	function kantorSolution() {
		
		let thumb = slider.querySelector('.thumb');

		thumb.onmousedown = function(event) {
		  event.preventDefault(); // prevent selection start (browser action)

		  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
		  // shiftY not needed, the thumb moves only horizontally

		  document.addEventListener('mousemove', onMouseMove);
		  document.addEventListener('mouseup', onMouseUp);

		  function onMouseMove(event) {
			let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

			// the pointer is out of slider => lock the thumb within the bounaries
			if (newLeft < 0) {
			  newLeft = 0;
			}
			let rightEdge = slider.offsetWidth - thumb.offsetWidth;
			if (newLeft > rightEdge) {
			  newLeft = rightEdge;
			}

			thumb.style.left = newLeft + 'px';
		  }

		  function onMouseUp() {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		  }

		};

		thumb.ondragstart = function() {
		  return false;
		};
	}
}
// Done.