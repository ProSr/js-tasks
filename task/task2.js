//Task 2. The Maximal Salary
let topSalary = (a, 
                 b = Object.entries(a), 
                 c = b.length
                ) => c? b.sort((a, b) => b[1] - a[1])[0][0] : null;
//done
