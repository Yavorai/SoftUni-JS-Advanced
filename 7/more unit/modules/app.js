// const sum = require('./myModule')
// console.log(sum(6,4));
// импортираните не е нужно да са със същото име, може да се преименуват
// const externalSum = require('./myModule')
// console.log(externalSum(6,4));

// ако е от обект може чрез деструкториране да се вземе 
const { sum } = require('./myModule')
console.log(sum(6,4));
const { product } = require('./myModule')
console.log(product(5,5));

// не се хойстват !!!