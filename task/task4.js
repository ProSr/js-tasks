//Task 4. Which day of month was many days ago?
//let getDateAgo = (date, days) => new Date(date - days * 1000 * 60* 60 * 24).getDate(); 

let getDateAgo = (date, 
                  days, 
                  a = new Date(date),
                  b = a.setDate(date.getDate() - days)
                 ) => a.getDate();
//done + + +

