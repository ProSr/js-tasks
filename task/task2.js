//Task 2. Rewrite setTimeout with setInterval

let i = 0;
let start = Date.now();
let count = function() {
	
	for(let j = 0; j < 1e6; j++) {
		i++;
	}
	
	if(i == 1e9) {
// eslint-disable-next-line no-console
		console.log("Done in " + (Date.now() - start) + 'ms');
		clearInterval(interval);
	}
};
let interval = setInterval(count, 0);

//done
