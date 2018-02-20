//Task 4. Sum input numbers

let someObj = {
  numbers: [],
  sumInput: function(value = prompt('A number please?')) {

    this.numbers.push(value);

    if( (value === null) || (value === "") || isNaN(+value) ) {

      this.numbers.length = this.numbers.length - 1;
      let sum = 0;

      for(let i of this.numbers) {
        sum += +i;
      }
      return sum;
    }
    return this.sumInput();
  },
};

//done +++++


