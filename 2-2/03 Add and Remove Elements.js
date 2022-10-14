function demo(arr) {
  let initialNumber = 1;
  let result = [];

  for (let el of arr) {
    if (el === "add") {
      result.push(initialNumber);
    } else {
      result.pop(initialNumber);
    }
    initialNumber++;
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
demo(["add", "add", "add", "add"]);
console.log("---------------------------------------");
demo(["add", "add", "remove", "add", "add"]);
console.log("---------------------------------------");
demo(["remove", "remove", "remove"]);
// //==============================================================
// function demo(arr){
//     let number = 1
//     let result = []
//     arr.forEach((el) => {
//         if(el == 'add'){
//             result.push(number)
//         }else{
//             result.pop()
//         }
//         number++
//     })
//     if(result.length == 0){
//         console.log('Empty');
//     }else{
//         console.log(result.join('\n'));
//     }
//     }
// //==============================================================
// function demo(arr){
//     let newArr = []
//     let num = 0
//     for(let i = 0; i < arr.length; i++){
//         num++
//         let command = arr[i]
//         if(command == "add"){
//             newArr.push(num)
//         }else if(command == 'remove'){
//             newArr.pop()
//         }
//     }
//     if(newArr.length  == 0){
//         console.log('Empty');
//     }else{
//         console.log(newArr.join('\n'));
//     }
// }
