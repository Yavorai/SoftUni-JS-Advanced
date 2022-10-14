function demo(input){

    let sum = input.reduce((a,b) => a + b)
    console.log(sum);

    let inversedSum = 0
    for(const n of input){
        inversedSum += 1 / n
    }
    console.log(inversedSum);

    console.log(input.join(''));
}
demo([1, 2, 3])
demo([2, 4, 8, 16])