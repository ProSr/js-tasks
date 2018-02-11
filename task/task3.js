//Task 3. Using "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref() { return this }
  };
};

let user2 = makeUser();

//console.log( user2.ref().name );

//done ±
