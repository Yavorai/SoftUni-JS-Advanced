function demo(arr){
    let result = []
    let biggest = arr[0]

    for(let nextEl of arr){
        if(nextEl >= biggest){
            result.push(nextEl)
            biggest = nextEl
        }
    }
    return result
}
console.log(demo([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(demo([20, 
    3, 
    2, 
    15,
    6, 
    1]));

// //=====================================================================================
//     function demo(arr) {
//         let biggest = Number.MIN_SAFE_INTEGER
//         // with filter -----------------------------------
//         // const result = arr.filter((el) => {
//         //     if(el >= biggest){
//         //         biggest = el
//         //         return true
//         //     }
//         //     return false
//         // })
//         // return result
//         // with forEach -----------------------------------
//         // const result = []
//         // arr.forEach((el) => {
//         //     if(el >= biggest){
//         //         result.push(el)
//         //         biggest = el
//         //     }
//         // })
//         // return result
//         // with reduce -----------------------------------------
//         let result = []
//         arr.reduce((acc, current) => {
//             if(current >= biggest){
//                 biggest = current
//                 acc.push(current)
//             }
//             return acc
//         },result)
//     return result
//     }
// //=====================================================================================
// function demo(arr) {
//     let result = []
//     let biggest = arr[0]
//     for (let index = 0; index < arr.length; index++) {
//         const currNum = arr[index];
        
//         if(currNum >= biggest){
//             result.push(currNum)
//             biggest = currNum
//         }
//     }
//     return result
// }