// not full

function solve() {
  // select elements - table, the 2 buttons
  // transform the table rows into a in memory nested array (matrix)
  // check if sudoku board is valid

  // quick check btn - color table border add text into check paragraph and color paragraph
  // clear btn - clear table border, paragraph text and paragraph color
  let buttons = document.querySelectorAll("#exercise tfoot button");
  let checkButton = buttons[0];
  let clearButton = buttons[1];

  checkButton.addEventListener("check", checkBoard);

  function checkBoard() {
    let board = Array.from(document.querySelectorAll("#exercise tbody tr")).map(
      (row) =>
        Array.from(row.querySelectorAll("input")).map((x) => Number(x.value))
    );
    //console.table(board)
    let isValid = isValidSudoku(board);
  }

  function isValidSudoku(board) {
    // check that every row has only num 1-3 and only one number of each
    // check that every col has only num 1-3 and only one number of each
    let result = 
    for (let row = 0; row < board.length; row++) {

      let rowObj = { 1: 0, 2: 0, 3: 0 };
      let colObj = { 1: 0, 2: 0, 3: 0 };

      for (let col = 0; col < board.length; col++) {
        let curRowCell = board[row][col];
        let curColCell = board[col][row];

        rowObj[curRowCell]++;
        colObj[curColCell]++;
      }

      let rowValues = Object.values(rowObj)
      let colValues = Object.values(colObj)
      // проверка колко пъти е срещнато дадено число
      if(rowValues.length > board.length || rowValues.some(x => x !== 1) || colValues.length > board.length || colValues.some(x => x !== 1)){
            return 'NOP! You are not done yet'
        }
        return 'You solve it! Congratulations!'

    }


  }



}
