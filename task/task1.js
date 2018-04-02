// Task 1. Spy decorator

function spy(func) {
	
	function wrapper(...args) {
		wrapper.calls.push(args);
		
		return func.apply(this, args);
	}
	wrapper.calls = [];
	return wrapper;
}

// Done