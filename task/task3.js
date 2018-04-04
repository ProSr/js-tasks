//Task 3. Function property after bind
function sayHi() {
  return this.name;
}
sayHi.test = 5;

//eslint-disable-next-line no-unused-vars
let bound = sayHi.bind({
  name: "John"
});
	
//done