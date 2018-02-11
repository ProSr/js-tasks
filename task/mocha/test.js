describe("Task 1. (syntax check)", function() {
  it("the result of this code is 'John'", function() {
    assert.equal((user.go)()
, 'John');
  });
});

describe("Task 2. (Explain the value of 'this')", function() {
  it("[object Object]", function() {
    assert.isObject(obj.go(), '[object Object]');
  });
  it("[object Object]", function() {
    assert.isObject((obj.go)(), '[object Object]');
  });
  it("[object Window]", function() {
    assert.equal((method = obj.go)(), '[object Window]');
  });
  it("[object Window]", function() {
    assert.equal((obj.go || obj.stop)(), '[object Window]');
  });
});

describe("Task 3. Using 'this' in object literal", function() {
  it("John", function() {
    assert.equal(user2.ref().name, "John");
  });
});

describe("Task 4. Create a calculator", function() {
  
  context("a = 0; b = 0", function() {
    before(() => { calculator.a = 0; calculator.b = 0 });

    it("sum = 0", function() {
      assert.equal(calculator.sum(), 0);
    });
    it("mul = 0", function() {
      assert.equal(calculator.mul(), 0);
    });
  });
    
  context("a = 2; b = 3", function() {
    before(() => { calculator.a = 2; calculator.b = 3} );

    it("sum = 5", function() {
      assert.equal(calculator.sum(), 5);
    });
    it("mul = 6", function() {
      assert.equal(calculator.mul(), 6);
    });
  });
});

describe.only("Task 5. Chaining", function() {
  it("ladder", function() {
    assert.equal(ladder.up().up().down().step, 1);
  });
});


