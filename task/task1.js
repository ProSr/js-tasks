//Task 1. Are counters independent?
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter1 = makeCounter();

//Answer: They independent
//done