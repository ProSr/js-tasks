describe("Task 1 Destructuring assignment", function() {
  it('checkDestructuring(user) returns "John,30,false"', function() {
    let user = {
      name: "John",
      years: 30
    };
    
    assert.equal(checkDestructuring(user), 'John,30,false')
  });
});
describe("Task 2. The Maximal Salary", function() {
  it("returns top-paid person", function() {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    assert.equal( topSalary(salaries), "Pete" );
  });

  it("returns null for the empty object", function() {
    assert.isNull( topSalary({}) );
  });
});