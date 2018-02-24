//Task 1. Translate border-left-width to borderLeftWidth

let camelize = str => (arr => arr.reduce((a, b) => a + (b[0].toUpperCase() + b.substr(1))))(str.split('-'));

//done +
