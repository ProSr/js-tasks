//Task 3. Debounce decorator
/* eslint-disable no-undef */
function debounce(f, ms) { // eslint-disable-line no-unused-vars
	let someVariable = true;
	
	return function(a) {
		if(someVariable) {
			f.call(this, a);
			someVariable = false;
			
			setTimeout(() => someVariable = true, ms);
		}	
	}
} 

//done