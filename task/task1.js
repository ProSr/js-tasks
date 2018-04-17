// Task 1. Add toString to the dictionary

let dictionary = Object.create(null);

dictionary = Object.create(dictionary, { toString: { value() { return Object.keys(this).join() }}});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// Done ++ Great solution!