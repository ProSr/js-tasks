//Task 3. Calling in an array context

let arr = ["a", "b"];

arr.push(function() {
  return this ;
});

//arr[2](); // ?

//done 