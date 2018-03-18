//Task 1. Set and decrease for counter

/* //FMethods + NFE
function makeCounter() {
  
  let counter = function() {
    return counter.count++;
  };
  counter.count = 0;
  counter.set = n => counter.count = n;
  counter.decrease = n => counter.count--;
  
  return counter;
}
*/

//Closure + NFE
function makeCounter() {
  let count = 0;
  
  let counter = function() {
    return count++;
  };
  
  counter.set = n => count = n;
  counter.decrease = n => count--;
  
  return counter;
}

// Done