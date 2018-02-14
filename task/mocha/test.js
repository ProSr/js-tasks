describe("Task 1. Two functions – one object", function() {
  it("A() == B()", function() {
    assert.equal(a, b);
  });
});

describe("Task 2. Testing new Calculator", function() {
  let calculator;
  before(function() {
    sinon.stub(window, "prompt");
    
    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("3");
    
    calculator = new Calculator();
    calculator.read();
  });

  it("2 + 3 = 5", function() {
    assert.equal(calculator.sum(), 5);
  });
  it("2 * 3 = 6", function() {
    assert.equal(calculator.mul(), '6');
  });
  
  after(function() {
    prompt.restore();
  });
});

describe("Task 3. Testing new Accumulator", function() {
  
  beforeEach(function() {
    sinon.stub(window, "prompt")
  });

  afterEach(function() {
    prompt.restore();
  });

  it("initial value is the argument of the constructor", function() {
    let accumulator = new Accumulator(1);

    assert.equal(accumulator.value, 1);
  });

  it("after reading 0, the value is 1", function() {
    let accumulator = new Accumulator(1);
    prompt.returns("0");
    accumulator.read();
    assert.equal(accumulator.value, 1);
  });

  it("after reading 1, the value is 2", function() {
    let accumulator = new Accumulator(1);
    prompt.returns("1");
    accumulator.read();
    assert.equal(accumulator.value, 2);
  });
  
});

describe("Task 4. Testing an extendable calculator", function() {
  
  let calculator;

  before(function() {
    calculator = new Calculator2;
  });

  it("calculate(12 + 34) = 46", function() {
    assert.equal(calculator.calculate("12 + 34"), 46);
  });

  it("calculate(34 - 12) = 22", function() {
    assert.equal(calculator.calculate("34 - 12"), 22);
  });

  it("add multiplication: calculate(2 * 3) = 6", function() {
    calculator.addMethod("*", (a, b) => a * b);
    assert.equal(calculator.calculate("2 * 3"), 6);
  });

  it("add power: calculate(2 ** 3) = 8", function() {
    calculator.addMethod("**", (a, b) => a ** b);
    assert.equal(calculator.calculate("2 ** 3"), 8);
  });
});