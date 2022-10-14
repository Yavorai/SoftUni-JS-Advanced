function demo(arr) {
    let magic = true
    for(let i = 0; i < arr.length -1; i++){
        let sumRowOne = arr[i].reduce((a,b) => a+b,0) // 1 и 2
        let sumRowNext = arr[i + 1].reduce((a,b) => a+b,0) // 2 и 3

        let sumColOne = 0
        let sumColTwo = 0

        for(let j = 0; j < arr.length;j++){
            sumColOne += arr[i][j]
            sumColTwo += arr[i + 1][j]
        }

        if(sumRowOne !== sumRowNext || sumColOne !== sumColTwo){
            magic = false
        }
    }
    //return magic
    console.log(magic);
}
demo([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log('------------------------------');
demo([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
console.log('------------------------------');
demo([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
/*
//=========================================================================
function magic(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }
        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }
    return true;
}
//==========================================================================
function magic(arr) {
    let isMagical = true
    for(let i = 0; i < arr.length - 1; i++){
        let sumRowOne = arr[i].reduce((a,b) => a + b, 0)
        let sumRowTwo = arr[i + 1].reduce((a,b) => a + b, 0)
        let sumColOne = 0
        let sumColTwo = 0
        for(let j = 0; j < arr.length;j++){
            sumColOne += arr[i][j]
            sumColTwo += arr[i + 1][j]
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            isMagical = false
        }
    }
    return isMagical
}
*/

//========================================================

function demo(arr) {
    // let rowsSums = []
    let sumRow = arr[0].reduce((a, b) => a + b);
    // arr.forEach(el => {
    //     rowsSums.push(el.reduce((a,b) => a + b))
    // })
    for (let i = 0; i < arr[0].length; i++) {
      //let sumRow = arr[i].reduce((a, b) => a + b);
      let currColSum = 0;
      for (let j = 0; j < arr.length; j++) {
        currColSum += arr[j][i];
      }
      if (currColSum !== sumRow) {
        return false;
      }
    }
    return true;
  }
  console.log(
    demo([
      [4, 5, 6],
      [6, 5, 4],
      [5, 5, 5],
    ])
  );
  