//Task 7. How many seconds till tomorrow?
let getSecondsToTomorrow = (date = new Date()) => Math.floor((new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1) - date)/1000);
//done