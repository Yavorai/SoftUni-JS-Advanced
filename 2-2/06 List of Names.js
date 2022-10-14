function demo(arr){
    let sorted = arr.sort((a,b) => a.localeCompare(b))
    let orderNumber = 1

    sorted.forEach((name) =>{
        console.log(`${orderNumber}.${name}`);
        orderNumber++
    })

}
demo(["John", "Bob", "Christina", "Ema"])

// function demo(arr){
//     arr.sort((a,b) => a.localeCompare(b))
//     for (let index = 0; index < arr.length; index++) {
//          console.log(`${index + 1}.${arr[index]}`);       
//     }
//  }

//  function demo(arr){
//     const result = arr.sort((a,b) => a.localeCompare(b))
//     let orderNumber = 1
//     result.forEach(el => {
//         console.log(`${orderNumber}.${el}`);
//         orderNumber++
//     })
// }