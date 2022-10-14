// let count = 5
// const parser = {
//     increment() {count++},
//     decrement() {count--},
//     reset() {count = 0},
//     default() {/* ...... */}
// }
// const command = 'increment' // example
// const action = parser[command]
// // или
// // parser[command] ? parser[command]() : parser.default()
// if(typeof action == 'function'){
//     action()
// }else{
//     //default case
// }
// console.log(count);

function demo(num, a, b, c, d, e) {

    let inputNum = Number(num);
    let arrOfCommands = [a, b, c, d, e];

    let commandParser = {
        chop() {inputNum = inputNum / 2},
        dice() {inputNum = Math.sqrt(inputNum)},
        spice() {inputNum = inputNum + 1},
        bake() {inputNum = inputNum * 3},
        fillet() {inputNum = inputNum * 0.8},
    }

    for (let i = 0; i < arrOfCommands.length; i++) {

      let command = arrOfCommands[i];
      let action = commandParser[command]

      action()
      console.log(inputNum);
    }
  }
  demo("32", "chop", "chop", "chop", "chop", "chop");
  console.log("----------------------------------------------");
  demo("9", "dice", "spice", "chop", "bake", "fillet");