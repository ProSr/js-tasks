// Task 2. Second bind
//eslint-disable-next-line no-unused-vars
function f() {
  return this.name;
}

//eslint-disable-next-line no-func-assign
f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

//done