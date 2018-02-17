describe("Task 1. Uppercast the first character", function() {
  it('Uppercases the first symbol', function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Doesn't die on an empty string", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});
describe("Task 2. Check for spam", function() {
  it('finds spam in "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('finds spam in "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('no spam in "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});
describe("Task 3. Truncate the text", function() {
  it("truncate the long string to the given lenth (including the ellipsis)", function() {
    assert.equal(
      truncate("What I'd like to tell on this topic is:", 20),
      "What I'd like to te…"
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Hi everyone!", 20),
      "Hi everyone!"
    );
  });
});
describe.only("Task 4. Extract the money", function() {
  it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
});