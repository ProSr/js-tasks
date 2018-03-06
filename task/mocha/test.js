describe("Task 1", function() {

  it('Turn the object into JSON', function() {

    assert.equal(jsOn, '{"name":"John Smith","age":35}');
  });
  it('Turn back the JSON into object', function() {
    
    assert.deepEqual(parSe, user);
  });
});
describe.only("Task 2", function() {

  it('Exclude backreferences', function() {
    let room = {
      number: 23
    };

    let meetup = {
      title: "Conference",
      occupiedBy: [{name: "John"}, {name: "Alice"}],
      place: room
    };

    room.occupiedBy = meetup;
    meetup.self = meetup;

    assert.equal(jsonReplacer(meetup, "occupiedBy", "self"), '{"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}');
  });
});