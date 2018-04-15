// Task 1. Add method "f.defer(ms)" to functions
function f() {
  alert("Hello!");
}
f.__proto__.defer = function(ms) {
	setTimeout(f, ms);
};
// Done