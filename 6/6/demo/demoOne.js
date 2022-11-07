// function printContext(){
//     console.log(this);
// }

// let obj = {
//     counter: 5,
//     //printContext,
// }
// //obj.printContext()

// //=======================================
// // this e това което седи от ляво на точката !!!
// printContext.apply(obj) //референция към нещо което ще стане this

//=========================================

function execute(func, text){
    let str = func() // 
    console.log(str + text);
}
let myFunc = () => 'hello '
function myFunc2() {return 'hello2 '}
execute(myFunc, 'world!')
execute(myFunc2, 'world!2')