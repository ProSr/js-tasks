//Task 5. A maximal subarray

function getMaxSubSum(arr) {
  let maxItem = 0;
  
  for(let i = 0; i < arr.length; i++) {
    let sumItems = 0;
    for(let j = i; j < arr.length; j++) {
      sumItems += arr[j];
      maxItem = Math.max(maxItem, sumItems);
    }
  }
  return maxItem;
}

/*
getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (take all)
*/

/*
    function getMaxSubSum(arr) {
      let maxSum = 0;
      let partialSum = 0;
    
      for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
      }
      return maxSum;
    }
*/

//done -