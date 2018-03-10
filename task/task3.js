//Task 3. Fibonacci numbers

//Slow Recursion Solution
let fib = (n, m = []) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2); 
/* Fast loop Solution
function fib(n, m = [0, 1]) {

  while(m.length != n) {
    m.push(m[m.length - 1] + m[m.length - 2]);
  }
  return m[m.length - 1] + m[m.length - 2]
}
*/

//done


