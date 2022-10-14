function demo(arr){
    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    for(let el of sorted){
        console.log(el);
    }
}
demo(['alpha', 
'beta', 
'gamma'])
console.log('----------------------------------');
demo(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])
console.log('----------------------------------');
demo(['test', 
'Deny', 
'omen', 
'Default'])

//===================================
// function demo(arr){
//     const result = arr.sort((a,b) => {
//         if(a.length > b.length){
//             return 1
//         }else if(a.length == b.length){
//             return a.localeCompare(b)
//         }else{
//             return - 1
//         }
//     })
//     return result.join('\n')
// }
// //=======================================
// function demo(arr) {
//     arr.sort(twoCriteriaSort);
//      return arr.join('\n')

//     function twoCriteriaSort(curr, next) {
//       if (curr.length === next.length) {
//           return curr.localeCompare(next)
//       }
//       return curr.length - next.length;
//     }
//   }