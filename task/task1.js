// Task 1. Inherit from SyntaxError
class FormatError extends SyntaxError {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}
let err = new FormatError("formatting error");
// Done 