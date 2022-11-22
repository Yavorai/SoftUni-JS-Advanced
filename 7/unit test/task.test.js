//let assert = require('assert')
//let {} = require('assert')
let solve = require('./task')


function test(){
    //  ARRANGE
    let expectedSum = 150
    let numbers = [10,20,30,40,50,60]
    let startIndex = 0
    let endIndex = 4
    // ACT
    let actualSum = solve(numbers, startIndex,endIndex)
    // Assert

    //assert.equal(actualSum,expectedSum)

   
    if(actualSum == expectedSum){
        console.log('correct');
    }else {
        console.log('Error');
    }
}
test()