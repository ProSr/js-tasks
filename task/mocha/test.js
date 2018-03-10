describe("Task 1", function() {
  context("Sum all numbers till the given one", function () {
    it('sumToRecursive(4) === 10', function() {
      assert.equal(sumToRecursive(4), 10);
    });
    it('sumToIf(4) === 10', function() {
      assert.equal(sumToIf(4), 10);
    });
    it(`testDrive(4,500000) === true
        "Recursive" method is slower than "if" method`, function() {
      assert.isTrue(testDrive(4,500000));
    });
  });
});
describe("Task 2", function() {
  context("Calculate factorial", function () {
    it("factorial(5) === 120", function() {
      assert.equal(factorial(5), 120);
    });
  });
});
describe("Task 3", function() {
  context("Fibonacci numbers", function () {
    it("fib(77) === 5527939700884757", function() {
      assert.equal(fib(7), 13);
    });
  });
});
describe("Task 4", function() {
  context("Output a single-linked list", function () {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
    it("printList(list) = '1234'", function() {
      assert.equal(printList(list), '1234');
    });
  });
});
describe.only("Task 5", function() {
  context("Output a single-linked list in the reverse order", function () {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
    it("printListBack(list) = '4321'", function() {
      assert.equal(printListBack(list), '4321');
    });
  });
});
