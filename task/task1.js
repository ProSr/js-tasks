// Task 1. Output every second

setTimeout(() => printNumbersInterval(1, 3), 0);
setTimeout(() => printNumbersTimeout(1, 3), 3000);

// eslint-disable-next-line no-console
let printNumbersInterval = (from, to, increment) =>  increment = setInterval(() => (from >= to + 1) ? clearInterval(increment) : console.log(`setInterval: ${from++}`), 1000),
	
	printNumbersTimeout = (from, to) => setTimeout(function run() { 
		// eslint-disable-next-line no-console
														console.log(`setTimeout: ${from++}`);
														(from <= to) ? setTimeout(run, 1000) : clearTimeout(run);
													}, 1000);

// Done