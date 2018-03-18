describe("Task 1", function() {
  context("Set and decrease for counter", function () {
    describe("counter", function() {
      it("increases from call to call", function() {

        let counter = makeCounter();

        assert.equal( counter(), 0 ); 
        assert.equal( counter(), 1 ); 
        assert.equal( counter(), 2 ); 
      });
    });

    describe("counter.set", function() {
      it("sets the count", function() {

        let counter = makeCounter();

        counter.set(10);

        assert.equal( counter(), 10 ); 
        assert.equal( counter(), 11 ); 
      });
    });

    describe("counter.decrease", function() {
      it("decreases the count", function() {

        let counter = makeCounter();

        counter.set(10);

        assert.equal( counter(), 10 ); 

        counter.decrease();

        assert.equal( counter(), 10 ); 

      });
    });
  });
});
describe("Task 2", function() {
  context("Sum with an arbitrary amount of brackets", function () {
    it("sum(1)(2) == 3;", function() {
      assert.equal(sum(1)(2), '3');
    });
    it("sum(1)(2)(3) == 6;", function() {
      assert.equal(sum(1)(2)(3), '6');
    });
    it("sum(5)(-1)(2) == 6", function() {
      assert.equal(sum(5)(-1)(2), '6');
    });
    it("sum(6)(-1)(-2)(-3) == 0", function() {
      assert.equal(sum(6)(-1)(-2)(-3), '0');
    });
    it("sum(0)(1)(2)(3)(4)(5) == 15", function() {
      assert.equal(sum(0)(1)(2)(3)(4)(5), '15');
    });
  });
});