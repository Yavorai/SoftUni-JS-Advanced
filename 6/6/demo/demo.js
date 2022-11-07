// // // inner method context --> this cariable is accessible only by the outer method
// // let obj = {
// //     name: "Peter",
// //     outer() {
// //         console.log(this);
// //         function inner() {
// //             console.log(this);
// //             inner()
// //         }
// //     }
// // }
// // obj.outer()

// // GLOBAL CONTEXT
// // window
// console.log('-------------------------------------------');

// function random (){
//     //console.log(this);
//     return Math.random().toFixed(2)
// }
// console.log(random());

// // in NODE.JS --> global
// // in browser --> window
// console.log('-------------------------------------------');

// // OBJECT CONTEXT
// let obj2 = {
//     name: 'Peter',
//     greed() {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// }

// obj2.greed() // method invocation                                            --> Hello! My name is Peter
// let greed = obj2.greed // copy function by reference  ----------------------------------------------------------------                    
// greed() // global invocation --> this is global --> name will be undefined  --> Hello! My name is undefined
// console.log('-------------------------------------------');
// // nested functions
// function a(){
//     function b(){
//         function c(){
//             function d(){
//                 console.log(this);
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()

// ARROW FUNCTION 

// let person = {
//     firstName: 'Pesho',
//     lastName: 'Georgiev',
//     introduce(){
//         let getFullName = function (){
//             // old  black magic not in use
//             //let that = this
//             //return that.firstName + ' ' + that.lastName
//             return this.firstName + ' ' + this.lastName
//             // ЗА ДА РАБОТИ ТОВА ТРЯБВА ДА СЕ ИЗПОЛЗВА ARROW FUNC - тя запазва контекста от по горе
//             // ARROW FUNC  ИЗПОЛЗВА КОНТЕКСТА НА PARENT-a
//                 let getFullName = () => {
//                     return this.firstName + ' ' + this.lastName
//                 }
//         }
//         console.log(`Hello, my name is ${getFullName()}`) // извикване на функция САМА ПО СЕБЕ СИ е global invocation
//     }
// }
// person.introduce()

//===============================================================================
// EXPLICIT BINDING

// call() and apply()  /--> bind() е различен

// може да се извика функция по различен начин


// CALL()  ============================================================================
function introduce(firstName,lastName){
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}
introduce() // global invocation

let objContext = {
    name: 'Pesho'
}
// invoke using call
introduce.call(objContext) // функцията си има метод
introduce.apply(objContext) // доста са сходни --> разликата идва от --> иска МАСИВ от аргументи КОЙТО МОЖЕМ ДА ПОДАДЕМ

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// APPLY()  ============================================================================

function introduce2(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}
introduce2() // global invocation

let objContext2 = {
    name: 'Pesho'
}
// invoke using call
introduce2.call(objContext, 'GOSHO', 'IVANOV') 
introduce2.apply(objContext, ['GOSHO', 'IVANOV']) // иска масив това е разликата

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// BIND() --> опакова функцията и по късно я дава когато се извика -- за по късна употреба

// bind не се изпълнява веднага
// връща нова функция затова се запазва в променлива

let superHuman = {
    name: 'Superman'
}
let superIntroduction = introduce.bind(superHuman, 'Luis', "Lane")          
superIntroduction() // ---> Hello Luis Lane, my name is Superman

// Или 

// let superIntroduction = introduce.bind(superHuman,)
// superIntroduction('Luis', "Lane") 