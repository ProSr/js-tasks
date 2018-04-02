// Task 2. Delaying decorator
/* eslint-disable no-unused-vars */
function delay(f, ms) {
	return function() {

		setTimeout(() => f.apply(this, arguments), ms); // eslint-disable-line no-undef
	}
}
//done