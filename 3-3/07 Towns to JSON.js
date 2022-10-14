// function demo(input) {
//   let [columns, ...table] = input.map(splitLine)

//   function isEmptyString(x) {
//     return x !== "";
//   }
//   function convertToNum(x) {
//     return isNaN(x) ? x : Number(Number(x).toFixed(2)) // двойно кастване
//   }
//   function splitLine(input) {
//     return input
//       .split("|")
//       .filter(isEmptyString)
//       .map((x) => x.trim())
//       .map(convertToNum);
//   }

//   return JSON.stringify(table.map(x => {
//     return columns.reduce((acc,curr,index) => {
//         acc[curr] = x[index]
//         return acc
//     }, {})
//   }))
// }
// console.log(demo([
//     "| Town | Latitude | Longitude |",
//     "| Sofia | 42.696552 | 23.32601 |",
//     "| Beijing | 39.913818 | 116.363625 |",
//   ]));
// console.log("-------------------------------------");
// demo([
//   "| Town | Latitude | Longitude |",
//   "| Veliko Turnovo | 43.0757 | 25.6172 |",
//   "| Monatevideo | 34.50 | 56.11 |",
// ]);
function demo(inputArr) {
  let titles = serializeRow(inputArr[0])
  let rows = inputArr
  .slice(1)
  .map(row => serializeRow(row).reduce(accumulateIntoObj, {}))
  
  return JSON.stringify(rows)

  function parseNumber(x){
    return isNaN(Number(x)) ? x : Number(Number(x).toFixed(2))
  }

  function accumulateIntoObj(obj,el,i){
    obj[titles[i]] = el
    return obj
  }

  function serializeRow(str){
    return str
    .split(/\s*\|\s*/gim)
    .filter(x => x !== "")
    .map(x => parseNumber(x))
  }
}
console.log(demo([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ]));
console.log("-------------------------------------");
demo([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
