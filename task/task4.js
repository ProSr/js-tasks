//Task 4. Create a calculator

function Calculator2() {
  this["+"] = (a, b) => a + b;
  this["-"] = (a, b) => a - b;
  this.calculate = function(str) {
    let value = str.split(' '),
        operator = value[1].toString(),
        operands = [Number(value[0]), Number(value[2])];
        
    return this[operator](operands[0], operands[1]);
  };
  this.addMethod = function(operator, func) {
    this[operator] = func;
  };
}



/*let calc = new Calculator2;

alert( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator2;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8*/

//done ±
