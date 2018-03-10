//Task 1. Sum all numbers till the given one
let sumToRecursive = n => n && (n += sumToRecursive(--n));
function sumToIf(n) {
  let sum = 0;
  while(n > 0) {
    sum += n;
    n--
  }
  return sum;
};

function testDrive(n, i) {
  
  sumToRecursive(n);
  sumToIf(n);
  
  let checking = (func, n, i) => {
    while(i--) func(n) },
    tr = Date.now();
  checking(sumToRecursive, n, i);
  tr = Date.now() - tr;
  
  let ti = Date.now();
  checking(sumToIf, n, i);
  ti = Date.now() - ti;
  return Boolean(tr - ti);
};

//done 