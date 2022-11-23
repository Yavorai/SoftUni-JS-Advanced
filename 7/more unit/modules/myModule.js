// function sum(a,b){
//     return a + b
// }
// //module.exports = sum // присвоена стойност към модул.експортс става публична и може да се ползва в други файлове

// // може и повече функции но се слагат в обект --> само един module.exports обаче
// function product(a,b){
//     return a * b
// }

// module.exports = {
//     sum,
//     product,
// }
//================================================================
function sum(a,b){
    return Number(a) + Number(b)
}
function product(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}


module.exports = {
    sum,
    product,
    divide,
}