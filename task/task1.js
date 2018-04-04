// Task 1. Bound function as a method

function f() {
  return this;
}

//eslint-disable-next-line no-unused-vars
let user = {
  g: f.bind(null)
};

// Done