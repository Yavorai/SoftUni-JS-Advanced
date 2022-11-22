let assert = require('assert').strict
let solve = require('./task2')
// може да се опаковат заедно 
describe('sub-sum calculator', () => {
    // mocha
    it('should calculate sub sum when end index is larger than length', () => { // трябва да е специфичен тест
    //  ARRANGE
    let expectedSum = 150
    let numbers = [10,20,30,40,50,60]
    let startIndex = 3
    let endIndex = 300
    // ACT
    let actualSum = solve(numbers, startIndex,endIndex)
    // Assert
    assert.equal(actualSum,expectedSum)
    }) // казваме какво се очаква да се случи от теста описателно и след това слагаме функцията
    it('should calc sub-sum when start index is lower than 0', () => { // test start index
        let expectedSum = 60
        let numbers = [10,20,30,40,50,60]
        let startIndex = -100
        let endIndex = 2
        let actualSum = solve(numbers, startIndex,endIndex)
        assert.equal(actualSum,expectedSum)
    })

})

