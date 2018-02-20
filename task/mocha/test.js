describe("Task 1. Is array copied?", function() {
  it('array.length = 4', function() {
    assert.equal(fruits.length, 4);
  });
});
describe("Task 2. Array operations", function() {

  it("Is Array", function() {
    assert.isArray(styles);
  });
  it("'Rock-n-Roll' checking", function() {
    assert.equal(styles[styles.length - 1], 'Rock-n-Roll');
  });
  it("The middle item is 'Classics'", function() {
    assert.equal(styles[getMiddleArray(styles)], "Classics");
  });
  it("Strip off first items & shows his value", function() {
    assert.equal(styles.shift(), "Jazz");
    styles.unshift("Rap", "Reggae", "Jazz");
  });
  it("0: 'Rap', 1: 'Reggae'", function() {
    assert.equal(styles[0], "Rap");
    assert.equal(styles[1], "Reggae");
  });
});
describe('Task 3. Calling in an array context', function() {
  it('arr returns "this"', function() {
    assert.equal(arr[2](), String(arr));
  });
});
describe("Task 4. Sum input numbers", function() {
  beforeEach(function() {
    sinon.stub(window, "prompt");
  });
  afterEach(function() {
    prompt.restore();
  });
  it("3 + null = 3", function() {
    prompt.onCall(0).returns(3);
    prompt.onCall(1).returns(null);
    assert.equal(someObj.sumInput(), 3);
  });
  context("НЕ УДАЁТСЯ ПРОДЕЛАТЬ ЭТОТ ТЕСТ, ТАК КАК ПОСЛЕДУЮЩИЕ ВЫЗОВЫ СКЛАДЫВАЮТ(СУММИРУЮТ) ЗНАЧЕНИЯ ИЗ ПРЕДЫДУЩИХ.", function() {
    it("7 + '' = 7", function() {
      prompt.onCall(0).returns(7);
      prompt.onCall(1).returns('');
      assert.equal(someObj.sumInput(), 7);
    });
    it("11 + null = 11", function() {
      prompt.onCall(0).returns(11);
      prompt.onCall(1).returns('someone else');
      assert.equal(someObj.sumInput(), 11);
    });
  });
});
describe("Task 5. A maximal subarray", function() {
  it("maximal subsum of [1, 2, 3] equals 6", function() {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });

  it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });

  it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });

  it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });

  it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });

  it("maximal subsum of [] equals 0", function() {
    assert.equal(getMaxSubSum([]), 0);
  });

  it("maximal subsum of [-1] equals 0", function() {
    assert.equal(getMaxSubSum([-1]), 0);
  });

  it("maximal subsum of [-1, -2] equals 0", function() {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });
});
