//Task 2. Array operations.

let styles = ['Jazz', 'Blues'],
    getMiddleArray = arr => arr.length % 2 === 1 ? (arr.length -1) / 2 : (arr.length / 2) - 1;

styles.push('Rock-n-Roll');

styles[getMiddleArray(styles)] = 'Classics';

//alert(styles.shift());

//styles.unshift("Rap", "Reggae");


//done ++++