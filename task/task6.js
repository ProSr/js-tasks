//Task 6. A random integer from min to max

function randomInteger(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

//done