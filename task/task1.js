// Task 1. Partial application for login
//eslint-disable-next-line no-unused-vars
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") return ok();
  else return fail();
}

let user = {
  name: 'John',

  login(result) {
	  debugger;
    return this.name + (result ? ' logged in' : ' failed to log in');
  }
};
// Done