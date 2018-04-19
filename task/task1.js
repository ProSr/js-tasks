// Task 1. An error in the inheritance
/* eslint-disable no-undef */

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!");
};


// Done 