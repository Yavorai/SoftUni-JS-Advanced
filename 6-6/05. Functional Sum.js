// function demo(a) {

//     function sum(b){
//         a += b
//         return sum
//     }
//     sum.toString = () => a
//     return sum
// }
// console.log(demo(1).toString());
// console.log(demo(1)(6)(-3).toString());


// // IIFE

// let add = (function (){
//     // closure in add function
//     let sum = 0

//     function add(num){
//         sum += num
//         return add
//         // заобикаляме проблема като правим функ на текст и връшаме сумата, защото не е достъпна сумата в closure
//     }
//     add.toString=function(){
//         return sum
//     }
//     return add
// })()

//===================================================================


// function solve(){
//     console.log('Hello');
//     return solve
// }
// solve()()()


function test(){
    //Closure in add function
    let sum = 0
    function add(addend){
        sum += addend
        return add
    }
    add.toString = function(){
        return sum
    }
    return add
}
//Function
let add = test()
console.log(
    add(1)(3)(8).toString()
);
