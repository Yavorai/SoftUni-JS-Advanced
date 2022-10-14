function demo(arr){

let biggerHalf = arr.sort((a,b) => a-b).slice(arr.length / 2)
console.log(biggerHalf);

}
demo([4, 7, 2, 5])
demo([3, 19, 14, 7, 2, 19, 6])