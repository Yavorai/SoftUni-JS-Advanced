// const myMap = {
//     'Pesho': '+53453454354354',
//     'Pesho2': '+53400000004',
//     'Pesho3': '+534534543333354',
// }
// for(const key in myMap){
//     console.log(myMap[key]);
// }

//===========================

// const person = {
//     name: 'Peter',
//     age: 23,
//     sayHi: function(){
//         console.log('Hello');
//     }
// }
// person.sayHi()

//==============================

let count = 5
const parser = {
    increment(){count++},
    decrement(){count--},
    reset(){count = 0},
    default(){console.log('default case');},
}
parser['increment'] ? parser['increment']() : parser.default()
console.log(count);