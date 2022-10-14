function demo(arrStrings, numberStep){

    let result = []
    for(let i = 0; i < arrStrings.length; i += numberStep){
        result.push(arrStrings[i])
    }
    return result

}
demo(['5', 
'20', 
'31', 
'4', 
'20'], 
2)
console.log('------------------------------------');
demo(['dsa',
'asd', 
'test', 
'tset'], 
2)


// function demo(arr, step){
//     const result = []
//     for(let i = 0; i < arr.length; i += step){
//         result.push(arr[i])
//     }
//     return result
// }


// function demo(arr, step){
//     return arr.filter((el, index) => index % step === 0)
//  }