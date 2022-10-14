function demo(array){
    let result = []
    let sorted = array.sort((a,b) => a - b)

    while(sorted.length !== 0){
        result.push(sorted.shift())
        result.push(sorted.pop())
    }
    console.log(result); // return
}
demo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
    )

//     function demo(arr) {
//         let result = []
//         arr.sort((a,b) => b - a)
      
//         while(arr.length !== 0){
//           result.push(arr.pop())
//           result.push(arr.shift())
//         }
//           return result
//       }
// //=============================================================
//       function demo(arr) {
//         arr = arr.sort((a, b) => {
//           return a - b;
//         });
//         let result = [];
//         // let count = Math.floor(arr.length / 2)
//         // for (let i = 0; i < count; i++) {
//         //   result.push(arr[i]);
//         //   result.push(arr[arr.length - 1 - i]);
//         // }
//         // return result
      
//         //while
//         while(arr.length != 0){
//             result.push(arr.shift(), arr.pop())
//         }
//         return result
      
//       }