describe("Task 1. Translate border-left-width to borderLeftWidth", function() {
    it("leaves an empty line as is", function() {
    assert.equal(camelize(""), "");
  });

  it("turns background-color into backgroundColor", function() {
    assert.equal(camelize("background-color"), "backgroundColor");
  });

  it("turns list-style-image into listStyleImage", function() {
    assert.equal(camelize("list-style-image"), "listStyleImage");
  });

  it("turns -webkit-transition into WebkitTransition", function() {
    assert.equal(camelize("-webkit-transition"), "WebkitTransition");
  });
});
describe("Task 2. Filter range", function() {

  it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4); 

    assert.deepEqual(filtered, [3, 1]);
  });

  it("doesn't change the array", function() {

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4); 

    assert.deepEqual(arr, [5,3,8,1]);
  });
});
describe('Task 3. Filter range "in place"', function() {
  it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); 

    assert.deepEqual(arr, [3, 1]);
  });

  it("doesn't return anything", function() {
    assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
  });
});
describe("Task 4. Sort in the reverse order", function() {
  it("sorting", function() {
    let arr = [5, 2, 1, -10, 8];

    sortReverseOrder(arr);
    
    assert.deepEqual(arr, [ 8, 5, 2, 1, -10 ]);
  });
});
describe("Task 5. Copy and sort array", function() {
  it('checking new variable', function() {
    let arr = ["HTML", "JavaScript", "CSS"],
        sorted = copySorted(arr);
    assert.deepEqual(sorted, ['CSS', 'HTML', 'JavaScript']);
  });
  it('checking initial variable', function() {
    let arr = ["HTML", "JavaScript", "CSS"],
        sorted = copySorted(arr);
    assert.deepEqual(arr, ['HTML', 'JavaScript', 'CSS']);
  });
});
describe("Task 6. Map to names", function() {

  it("names = ['John', 'Pete', 'Mary']", function() {
    let john = { name: "John", age: 25 },
        pete = { name: "Pete", age: 30 },
        mary = { name: "Mary", age: 28 },

        users = [ john, pete, mary ];
    
    assert.deepEqual(createMapToNames(users), ['John', 'Pete', 'Mary']);
  });
});
describe("Task 7. Map to objects", function() {
  it('deepEqual Map', function() {
    let john = { name: "John", surname: "Smith", id: 1 },
        pete = { name: "Pete", surname: "Hunt", id: 2 },
        mary = { name: "Mary", surname: "Key", id: 3 },

        users = [ john, pete, mary ];
    
    assert.deepEqual(usersMapped(users), [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 }
    ]);
  });
});
describe("Task 8. Sort objects", function() {
  it('sorting', function() {
    let john = { name: "John", age: 25 },
        pete = { name: "Pete", age: 30 },
        mary = { name: "Mary", age: 28 },

        arr = [ john, pete, mary ];

    assert.deepEqual(sortByName(arr), [ john, mary, pete ]);
  });
});
describe("Task 9. Shuffle an array", function() {
  it('testing is not impossible', function() {
    let arr = [1, 2, 3];
    assert.sameMembers(shuffle(arr), arr/*, [message]*/);
  })
});
describe("Task 10. Get average age", function() {
  it("average", function() {
    let john = { name: "John", age: 25 },
        pete = { name: "Pete", age: 30 },
        mary = { name: "Mary", age: 29 },

        arr = [ john, pete, mary ];
    
    assert.equal(getAverageAge(arr), 28);
  });
});
describe("Task 11. Filter unique array members", function() {
  it("removes non-unique elements", function() {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    assert.deepEqual(unique(strings), ["Krishna", "Hare", ":-O"]);
  });

  it("does not change the source array", function() {
    let strings = ["Krishna", "Krishna", "Hare", "Hare"];
    unique(strings);
    assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
  });
});
