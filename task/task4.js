//Task 4. Sum object properties

let salaries = {/*
  John: 100,
  Ann: 160,
  Pete: 130
*/};
let sum = () => {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key]
  }
  return sum
};

//Done