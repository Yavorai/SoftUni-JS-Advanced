function demo(input){

    let number = input.toString()
    let isSame = true
    let sumTotal = 0

    let digitToCompare = number[0]

    for(let i = 0; i < number.length; i++){

        sumTotal += Number(number[i])

        if(number[i] !== digitToCompare){
            isSame = false
        }

    }

    console.log(isSame);
    console.log(sumTotal);
}
demo(2222222)
demo(1234)


//============================================

// function demo(number){
//     const string = number.toString() // = number + "" (също го прави на стринг)
//     let = isSame = true
//     let sum = 0
//     for(let i = 0; i < string.length; i ++){
//         let current = Number(string[i])
//         let next = string[i+1]
//         if(string[i] !== next && next !== undefined){
//             isSame = false
//         }
//         sum += current
//     }
    
//     return `${isSame}\n${sum}`
// }