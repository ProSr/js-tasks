describe("Task 1", function() {
  context("Are counters independent?", function () {
    it('counter() = 0',function() {
      assert.equal(counter(),0);
      assert.equal(counter(),1);
      assert.equal(counter1(),0);
      assert.equal(counter1(),1);
    })
  });
});
describe("Task 2", function() {
  context("Counter object", function () {
    it('.up() = ++ & .down() = --',function() {
      assert.equal(counter2.up(),1);
      assert.equal(counter2.up(),2);
      assert.equal(counter2.down(),1);
    })
  });
});