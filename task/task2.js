// Task 2. Drag superheroes around the field
function auxiliaryHTMLtask2() {
	let divTask2 = document.createElement('div');
	divTask2.id = 'divTask2';
	divTask2.innerHTML = `<style>
		html, body {
		  margin: 0;
		  padding: 0;
		}

		#field {
		  background: url(https://en.js.cx/task/drag-heroes/solution/field.svg);
		  width: 800px;
		  height: 500px;
		  float: left;
		}

		/* heroes and the ball (dragables) */

		.hero {
		  background: url(https://js.cx/drag-heroes/heroes.png);
		  width: 130px;
		  height: 128px;
		  float: right;
		}

		#hero1 {
		  background-position: 0 0;
		}

		#hero2 {
		  background-position: 0 -128px;
		}

		#hero3 {
		  background-position: -120px 0;
		}

		#hero4 {
		  background-position: -125px -128px;
		}

		#hero5 {
		  background-position: -248px -128px;
		}

		#hero6 {
		  background-position: -244px 0;
		}

		.draggable {
		  cursor: pointer;
		}
	</style><h2>Place superheroes around the soccer field.</h2><p>Superheroes and the ball are elements with the class "draggable". Make them really draggable.</p><p>Important: limit dragging by the window. If a draggable reaches window top or bottom, then the page should scroll to let us drag it further.</p><p>If your screen is big enough to fit the whole document -- make the window smaller to get vertical scrolling, so that you could test it.</p><p>In this task it's enough to handle vertical scrolling. There's no horizontal scrolling usually, and it's handled the similar way if needed.</p><p>And one more thing: heroes may never leave the page. If they reach the edge of the document, no dragging outside of it.</p><div id="field"></div><div class="hero draggable" id="hero1"></div><div class="hero draggable" id="hero2"></div><div class="hero draggable" id="hero3"></div><div class="hero draggable" id="hero4"></div><div class="hero draggable" id="hero5"></div><div class="hero draggable" id="hero6"></div><img src="https://en.js.cx/clipart/ball.svg" class="draggable"><div style="clear:both"></div>`;
	document.body.prepend(divTask2);
}
function solutionTask2() {
	let currentDroppable = null;
	
    divTask2.onmousedown = function(event) {
//		event.preventDefault();
		let target = event.target;
		if(!target.closest('.draggable')) return;

      let shiftX = event.clientX - target.getBoundingClientRect().left;
      let shiftY = event.clientY - target.getBoundingClientRect().top;

      target.style.position = 'absolute';
      target.style.zIndex = 1000;
      divTask2.append(target);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        target.style.left = pageX - shiftX + 'px';
        target.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        target.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        target.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('#field');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a #field before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a #field now
            // (maybe just left the #field)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      target.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        target.onmouseup = null;
		  field.style.filter = '';
      };

    };

    function enterDroppable(elem) {
		field.style.filter = 'grayscale(100%)';
    }

    function leaveDroppable(elem) {
		field.style.filter = '';
    }

    divTask2.ondragstart = function() {
      return false;
    };
}
// Done