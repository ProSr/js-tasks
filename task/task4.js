//Task 3. Throttle decorator
/* eslint-disable no-undef */
function throttle(f, ms) { // eslint-disable-line no-unused-vars
	let switcher = true,
		closure;
	return function wrapper(a) {
		if(a !== undefined) closure = a;
		
		if(switcher === true) {
			f(closure);
			switcher = setTimeout(() => {switcher = true; wrapper()}, ms);
		}
		
	}
}
//done