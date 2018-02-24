//Task 3. Filter range "in place"

let filterRangeInPlace = (arr, a, b) => {
  for(let i = 0; i < arr.length; i++) {
    if(a <= arr[i] && arr[i] <= b) continue; 
    arr.splice(i, 1);
  }
};
//done +