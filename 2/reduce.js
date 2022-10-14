let numbers = [5,6,7,83,4,5]
let sum = numbers.reduce((acc, num) => {
    return acc + num // трябва да се ретърне задължително
}, 1000)
console.log(sum);