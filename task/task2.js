//Task 2. Create new Calculator
function Calculator() {
  this.sum = function() {
    return this.s + this.m;
  };
  this.mul = function(a, b) {
    return this.s * this.m;
  };
  this.read = function() {
    this.s = +prompt("first num", '2');
    this.m = +prompt("second num", '3');
    this.sum();
    this.mul();
  };
}
//let calculator = new Calculator();
//calculator.read();

//alert( "Sum=" + calculator.sum() );
//alert( "Mul=" + calculator.mul() );

//done ±
