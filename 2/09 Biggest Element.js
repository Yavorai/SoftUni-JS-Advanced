function demo(matrix) {
    let result = []
    for(let arr of matrix){
        result.push(Math.max(...arr)) // взима най големите от всеки масив
    }
    return Math.max(...result)
}
let res = demo([
  [20, 50, 10],
  [8, 33, 145],
]);
console.log(res);
console.log("----------------------------------------");
demo([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
