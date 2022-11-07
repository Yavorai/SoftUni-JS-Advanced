// function start(){
//     let counter = 0

//     function increment(n){
//         counter += n
//         console.log(counter);
//         //counter = 0
//     }
//     return increment
// }
// let myCounter = start()
// myCounter(1)
// myCounter(2)
// myCounter(3)
// myCounter(4)
// myCounter(5)

//======================================================

function human(n){

    let name = n
    
    function sayHi(){
        console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel(){
        console.log(`${name} is feeling good!`);
    }
    sayHi()
    sayHowYouFeel()

    return {
        sayHi,
        sayHowYouFeel,
    }

}
human('Sina')
let pesho = human('Pesho')
pesho.sayHowYouFeel()