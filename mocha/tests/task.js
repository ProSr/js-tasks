describe("Task 2. Check for emptiness", function() {
  it("true if the object has no properties, false otherwise.", function() {
    assert.isTrue(isEmpty(schedule), "true")
  });
});

describe("Task 4. Sum Object Properties", function() {
  
  it("Sum all Solaries = 390 || 0", function() {
    
    assert.include([390, 0], sum(), 'array contains value');
  });
});

describe("Task 5. Multiply numeric properties by 2", function() {
  it("multiplyNumeric(obj) multiplies with property of menu by 2. Result: 400", function() {
    assert.equal(menu.width, 400);
  });it("multiplyNumeric(obj) multiplies height property of menu by 2. Result: 600", function() {
    assert.equal(menu.height, 600);
  });it('multiplyNumeric(obj) multiplies title property of menu by 2. Result: "my menu"', function() {
    assert.equal(menu.title, "My menu");
  });
});