function demo(input){
let result;
//let area = input ** 2 * Math.PI
let inputType = typeof(input)
// console.log(inputType);
if(inputType === 'number'){
    result = Math.pow(input,2) * Math.PI
    console.log(result.toFixed(2));
}else{
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

}
demo(5)
demo('name')