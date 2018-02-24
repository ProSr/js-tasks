//Task 10. Get average age

let getAverageAge = users => users.reduce((previousValue, item) => previousValue + item.age, 0) / users.length;

//done +