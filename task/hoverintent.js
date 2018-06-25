'use strict';

// Here's a brief sketch of the class
// with things that you'll need anyway
class HoverIntent {

  constructor({
    sensitivity = 0.1, // speed less than 0.1px/ms means "hovering over an element"
    interval = 100, // measure mouse speed once per 100ms: calculate the distance between previous and next points
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // make sure "this" is the object in event handlers.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    // assign the handlers
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);

    // continue from this point
    this.currentElem = null;
    this.x = false;
    this.y = false;
    this.check = (x, y) => {
      return () => {
        let result = [x - this.x || x, y - this.y || y];
        if(result.some(val => Math.abs(val / this.interval) < this.sensitivity))
        this.over();
      }
    };
    this.clock;
  }

  onMouseOver(event) {
    if(this.currentElem) return;
    let target = event.target.closest('#elem');
    this.currentElem = target;
    
    let x = event.clientX,
        y = event.clientY;
    this.clock = setTimeout(this.check(x, y), this.interval);
    this.elem.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseOut(event) {
    if(!this.currentElem) return;
    let relatedTarget = event.relatedTarget;
    if(relatedTarget) {
      while(relatedTarget) {
        if(relatedTarget == this.currentElem) return;
        relatedTarget = relatedTarget.parentNode;
      }
    }
    
    this.elem.removeEventListener('mousemove', this.onMouseMove);
    this.out();
    this.currentElem = null;
  }

  onMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }


  destroy() {
    this.elem.removeEventListener("mouseover", this.onMouseOver);
    this.elem.removeEventListener("mouseout", this.onMouseOut)
  }

}