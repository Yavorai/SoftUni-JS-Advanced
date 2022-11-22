function solve(numbers,start,end){
    if(!Array.isArray(numbers)){ // правилният начин да се провери дали е масив
        return NaN
    }

    let startIndex = Math.max(start, 0) // ще вземе по високата от двете, ако е отрицателна стойност ще вземе нулата
    let endIndex = Math.min(end, numbers.length - 1)
    let subNumbers = numbers.slice(startIndex,endIndex + 1)
    let sum = subNumbers.reduce((a,x) => a + Number(x),0)
    return sum
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([10, 'twenty', 30, 40], 0, 2));