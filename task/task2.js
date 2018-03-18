//Task 2. Sum with an arbitrary amount of brackets
let sum = function(n = 0) {
  let result = 0;
  
  function sum2(n) {
    result += n;
    return sum2;
  }

  sum2.toString = () => result;
  
  return sum2(n);
}
//done