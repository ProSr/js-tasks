//Task 3. European weekday
//let getLocalDay = date => [7, 1, 2, 3, 4, 5, 6][date.getDay()];
let getLocalDay = (date, a = date.getDay()) => a ? a : 7;
//done +++
