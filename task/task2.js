// Task 2. Rewrite to prototypes
function Clock({ template }) {
	this._template = template;
}

Clock.prototype._render = function() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

	//eslint-disable-next-line no-undef, no-console
    alert(output);
  }

Clock.prototype.stop = function() {
	//eslint-disable-next-line no-undef
    clearInterval(this._timer);
  };

Clock.prototype.start = function() {
    this._render();
	//eslint-disable-next-line no-undef
    this._timer = setInterval(this._render.bind(this), 1000);
  };
// Done 