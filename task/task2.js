//Task 2. Exclude backreferences
let jsonReplacer = (a, ...b) => JSON.stringify(a, (key, value) => ((key != '') && (value == a)) ? undefined : value);
//done ± -