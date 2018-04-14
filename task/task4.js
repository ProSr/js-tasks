// Task 4. Why two hamsters are full?
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
	stomach: [],
  __proto__: hamster
};
//eslint-disable-next-line no-unused-vars
let lazy = {
	stomach: [],
  __proto__: hamster
};

speedy.eat("apple");
// Done