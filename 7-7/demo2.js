let matrix = [
    [1,2,3],
    [4,5,6],
    [9,8,7],
]
let max = matrix.reduce((acc, row) => {
    let maxValueInRow = row.reduce((innerAcc, el) => innerAcc = Math.max(innerAcc, el))
    return Math.max(acc,maxValueInRow)

},Number.MIN_SAFE_INTEGER)
console.log(max);