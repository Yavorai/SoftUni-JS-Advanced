function hello(name){
    return `Hello, ${name}`
}
function fancyHello(name1){
    return `Hi there mr.${name1}`
}
function greet(name2, sayGreeting){ // 2рото е начина по който искаме да поздравим
    return sayGreeting(name2)
}
// var 1
console.log(greet('Pesho', hello));
// var 2
console.log(greet('Stamat', fancyHello));
//================================================================
// return function 
function greet2(name){
    return function(message){
        console.log(`Hello ${name}. ${message}`); 
    }
}
let greetPesho = greet2('Pesho')
greetPesho('How are you today?')
greetPesho('What do you do?')