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
describe("Task 3", function() {
  context("Function in if", function () {
    it('sayHi() === undefined',function() {
      assert.isUndefined(sayHi());
    })
  });
});
describe("Task 4", function() {
  context("Sum with closures", function () {
    it('sum(1)(2) = 3',function() {
      assert.equal(sum(1)(2),3);
    })
    it('sum(5)(-1) = 4',function() {
      assert.equal(sum(5)(-1),4);
    })
  });
});
describe("Task 5", function() {
  context("Filter through function", function () {
    describe("inArray", function() {
      let arr = [1, 2, 3, 4, 5, 6, 7];

      it("returns the filter for values in array", function() {

        let filter = inArray(arr);
        assert.isTrue(filter(5));
        assert.isFalse(filter(0));
      });
      it("assert.equal( filter( 1, 2, 10 ), '1,2' );", function() {

        let filter = inArray(arr);
        assert.equal(filter(1, 2, 10), '1,2');
      });
      it("assert.equal( filter( [ 1, 2, 10 ] ), '1,2' )", function() {

        let filter = inArray(arr);
        assert.equal(filter([1, 2, 10]), '1,2');
      });
    });
    describe("inBetween", function() {

      it("returns the filter for values between", function() {
        let filter = inBetween(3, 6);
        assert.isTrue(filter(5));
        assert.isFalse(filter(0));
      });
    });
  });
});
describe("Task 6", function() {
  context("Sort by field", function () {
    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ],
    users1 = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" }
    ],
    users2 = [
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" }
    ];
    
    it('sort by name',function() {
      assert.deepEqual(users.sort(byField('name')), users1);
    })
    it('sort by age',function() {
      assert.deepEqual(users.sort(byField('age')), users2);
    })
  });
});
describe("Task 7. Army of functions", function() {
  context("army", function () {
    let army;

    before(function() {
      army = makeArmy();
      window.alert = sinon.stub(window, "alert");
    });

    it("army[0] shows 0", function() {
      army[0]();
      assert(alert.calledWith(0));
    });


    it("army[5] shows 5", function() {
      army[5]();
      assert(alert.calledWith(5));
    });

    after(function() {
      window.alert.restore();
    });
  });
});
