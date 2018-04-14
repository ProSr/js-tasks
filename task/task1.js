// Task 1. Working with prototype
let animal = {
  jumps: null
};
//eslint-disable-next-line no-unused-vars
let rabbit = {
  __proto__: animal,
  jumps: true
};
// Done