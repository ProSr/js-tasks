//Task 2. Filter anagrams
let aclean = arr => {
  let valueArr = [];
  for(let item of arr) {
    let x = item.toUpperCase().split('').sort().join();
    valueArr.push(x);
  }

  let set = new Set(valueArr),
      returnArr = [];
  
  for(let i of set) {
    returnArr.push( arr[valueArr.indexOf(i)] )
  }
  return returnArr;
};
//done