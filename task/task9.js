//Task 9. Shuffle an array

let shuffle = (array) => array.sort((a, b) => {
  let rnd = Math.random();
  if(rnd < (1 / 3)) return -1;
  if(rnd < (2 / 3)) return  0;
  return 1;
});

//done 