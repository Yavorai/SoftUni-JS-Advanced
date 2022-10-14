function equalNeighbours(matrix) {
    let finds = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    finds++;
                }
            }
            if (col < matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    finds++;
                }
            }
        }
    }
    return finds;
}
equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])

//======================================================

function equalNeighbours(matrix) {
    // init counter
    let counter = 0
    const rowSize = matrix[0].length // понеже всички са с еднаква дължина
    // check rows
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
    for(let colIndex = 0; colIndex < matrix[rowIndex].length -1 ;colIndex++){
        if(matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]){
          counter++
        }
      }
    }
    // check columns
    // правим цикъл който ги обхожда колона по колона а не ред по ред 
    for(let colIndex = 0; colIndex < rowSize;colIndex++){
      for(let rowIndex =0; rowIndex < matrix.length - 1; rowIndex++){
        if(matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]){
          counter++
        }
      }
    }
    // print result
    return counter
}