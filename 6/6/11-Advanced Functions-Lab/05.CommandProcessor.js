// function solution() {
//     let str = '';

//     return {
//         append: v => (str += v),
//         removeStart: x => (str = str.slice(x)),
//         removeEnd: x => (str = str.slice(0, -x)),
//         print: () => console.log(str),
//     }

//     // append(string) - append the given string at the end of the internal string
//     // removeStart(n) - remove the first n characters from the string, n is an integer
//     // removeEnd(n) - remove the last n characters from the string, n is an integer
//     // print - print the stored string on the console
// }

// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print(); // loa

// let secondZeroTest = solution();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print(); // 34

//=========================================
// closure
// function solution() {
//     let result = ''
//         return {
//             append(str){
//                 result += str
//             },
//             removeStart(num){
//                 result = result.substring(num)
//             },
//             removeEnd(num){
//                 result = result.substring(0, result.length - num)
//             },
//             print(){
//                 console.log(result);
//             },
//         }
// }

// let firstZeroTest = solution(); // тук скоупа му приключва

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print(); // loa

//======================================================================

function solution() {
  let state = "";

  function append(str) {
    state += str;
  }

  function removeStart(n) {
    //state = state.slice(n)
    state = state.substring(n);
  }

  function removeEnd(n) {
    //state = state.slice(0, -n)
    if (state.length >= n) {
      state = state.substring(0, state.length - n);
    }
  }

  function print() {
    console.log(state);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}
let firstZeroTest = solution();
//console.log(firstZeroTest);
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
