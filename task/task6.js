//Task 6. How many seconds has passed today? 
let getSecondsToday = (date = new Date()) => Math.floor((date - new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))/1000);
//done
