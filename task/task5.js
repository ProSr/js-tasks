//Task 5. Last day of month?
let getLastDayOfMonth = (year, 
                         month, 
                         a = new Date(year, month + 1, 0)
                        ) => a.getDate();
//done
