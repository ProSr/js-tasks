//Task 3. Iterable keys



let iterableKeys = (map, more) => {
  let keys;
//  0.) working example 
//  keys = Array.from(map.keys());
  
// 1.) working exapmle  
/*
  keys = [];
  map.forEach((key, value) => keys.push(value));
*/
  
// 2.) working example
/*
  keys = [];
  for(let i of map.keys()) {
      keys.push(i)
  }
*/
  keys.push(more);
  
  return keys;
}

//done + + ±