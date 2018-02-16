describe("Task 1. Sum numbers from the visitor", function() {
  before(function() {
    sinon.stub(window, "prompt")
  })
  after(function() {
    prompt.restore();
  })
  it("2 и 4 = 6", function() {
    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("4");
    assert.equal(getSum(), 6);
  });
});
describe("Task 2. Why 6.35.toFixed(1) == 6.3?", function() {
  
  it("(6.35 * 10).toFixed() / 10 = 6.4", function() {
    assert.equal((6.35 * 10).toFixed() / 10, 6.4);
  });
});
describe("Task 3. Repeat until the input is a number", function() {
  
  beforeEach(function() {
    sinon.stub(window, "prompt");
  });

  afterEach(function() {
    prompt.restore();
  });

  context("readNumber", function() {

    it("if a number, returns it", function() {
      prompt.returns("123");
      assert.strictEqual(readNumber(), 123);
    });

    it("if 0, returns it", function() {
      prompt.returns("0");
      assert.strictEqual(readNumber(), 0);
    });

    it("continues the loop unti meets a number", function() {
      prompt.onCall(0).returns("not a number");
      prompt.onCall(1).returns("not a number again");
      prompt.onCall(2).returns("1");
      assert.strictEqual(readNumber(), 1);
    });

    it("if an empty line, returns null", function() {
      prompt.returns("");
      assert.isNull(readNumber());
    });

    it("if cancel, returns null", function() {
      prompt.returns(null);
      assert.isNull(readNumber());
    });

  });
});
describe("Task 4. An occasional infinite loop", function() {
  
  it("0.2 * 10 != 10", function() {
    assert.notEqual(0.2 * 10, 10);
  });
});
describe("Task 5. A random number from min to max", function() {     

  it("Random floating-point number is Below 5", function() {
    let i = 0, j = []; 
    while(i++ < 100) {
      j.push(random(1, 5));
    }
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }
    assert.isBelow(getMaxOfArray(j), 5);
  });
  it("Random floating-point number is Above 1", function() {
    let i = 0, j = []; 
    while(i++ < 100) {
      j.push(random(1, 5));
    }
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }
    assert.isAbove(getMinOfArray(j), 1);
  });
});
describe.only("Task 6. A random integer from min to max", function() {     

  it("Random floating-point number is Below 5", function() {
    let i = 0, j = []; 
    while(i++ < 100) {
      j.push(randomInteger(1, 5));
    }
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }
    assert.isAtMost(getMaxOfArray(j), 5);
//    assert.isBelow(getMaxOfArray(j), 5);
  });
  it("Random floating-point number is Above 1", function() {
    let i = 0, j = []; 
    while(i++ < 100) {
      j.push(randomInteger(1, 5));
    }
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }
    assert.isAtLeast(getMinOfArray(j), 1);
//    assert.isAbove(getMinOfArray(j), 1);
  });
});
