describe("Task 1. Unique", function() {
  it("removes non-unique elements", function() {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
  });

  it("does not change the source array", function() {
    let strings = ["Krishna", "Krishna", "Hare", "Hare"];
    unique(strings);
    assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
  });
});
describe("Task 2. Filter anagrams", function() {
  function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }

  describe("aclean", function() {

    it("returns exactly 1 word from each anagram set", function() {
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

      let result = aclean(arr);
      assert.equal(result.length, 3);

      assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
      assert.equal(intersection(result, ["teachers", "cheaters", "hectares"]).length, 1);
      assert.equal(intersection(result, ["ear", "era"]).length, 1);

    });

    it("is case-insensitive", function() {
      let arr = ["era", "EAR"];
      assert.equal(aclean(arr).length, 1);
    });

  });
});
describe('Task 3', function() {
  it('Iterable keys', function() {
    
    let map = new Map();

    map.set("name", "John");
    
    assert.deepEqual(iterableKeys(map, 'more'), ['name', 'more']);
  });
});
describe("Task 4", function() {
  it("Store 'unread' flags", function() {
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];
    let unreadSet = new WeakSet(messages);
  assert.isTrue(unreadSet.has(messages[2]));
    messages.shift();
      
  assert.isTrue(messages.length === 2);
    
  assert.isFalse(unreadSet.has(messages[2]));
    
  });
});
describe.only("Task 5. Someone Else", function() {
  it("Store read dates", function() {
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];
    let storeReadDates = new WeakMap();
    
    storeReadDates.set(messages[0], 'yesterday');
    storeReadDates.set(messages[1], 'today');
    storeReadDates.set(messages[2], 'today');
    
    assert.equal(storeReadDates.get(messages[0]), 'yesterday');
    
    
    messages.shift();
    
    assert.equal(storeReadDates.get(messages[0]), 'today');
    
  
  });
});
