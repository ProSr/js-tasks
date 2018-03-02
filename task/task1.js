//Task 1. Sum the properties
let sumSalaries = (a, b = Object.values(a), c = b.length) => c ? b.reduce((a, b) => a + b) : c;
//done + + +
