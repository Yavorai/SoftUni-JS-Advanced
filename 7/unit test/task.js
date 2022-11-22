// UNIT TESTING
function solve(numbers,start,end){
    if(!Array.isArray(numbers)){ // правилният начин да се провери дали е масив
        return NaN
    }
    let startIndex = Math.max(start, 0) // ще вземе по високата от двете, ако е отрицателна стойност ще вземе нулата
    let endIndex = Math.min(end, numbers.length - 1) //  end или последния
    let subNumbers = numbers.slice(startIndex,endIndex + 1)
    let sum = subNumbers.reduce((a,x) => a + Number(x),0)
    return sum
}

module.exports = solve