// function demo() {
//     let first = 0
//     let second = 1

//     function calc(){
//         let next = first + second
//         first = second
//         second = next
//         return first
//     }
//     return calc
// }
// let fib = demo();
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());


//===============================================
function fibonator(){
        let prev = 0 // 0   // вар 2  или  1
        let curr = 1 // 1   // вар 2 или  0
    function inner(){
        let next = prev + curr
        prev = curr
        curr = next
        return prev // връщаме от предходния елемент за да започне с 1 1 2 3 5  8 ... // и при вар 2 тук е curr
    }
    return inner
}
let fib = fibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());