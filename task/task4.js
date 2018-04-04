// Task 4. Ask losing this

// eslint-disable-next-line no-unused-vars
			function askPassword(ok, fail) {
// eslint-disable-next-line no-debugger
				let password = prompt("Password?", "");
// eslint-disable-next-line no-undef
				if (password == "rockstar") return ok();
				else return fail();
			}

// eslint-disable-next-line no-unused-vars
			let user2 = {
				name: "John",
				loginOk() {
					return `${this.name} logged in`;
				},
				loginFail() {
					return `${this.name} failed to log in`;
				}
			}
//			askPassword(user2.loginOk, user2.loginFail);
// done