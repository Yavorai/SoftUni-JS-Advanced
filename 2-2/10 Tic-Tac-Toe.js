function demo(){

}
demo()


function ticTacToe(arr) {

    function hasWin(field, coordinates) {
        
        const [x,y] = coordinates;
        if ((field[0][y] === field[1][y]) && field[0][y] === field[2][y] && field[0][y] !== false) {
            return true;
        } else if (field[x][0] === field[x][1] && field[x][0] === field[x][2] && field[x][0] !== false) {
            return true;
        } else return (field[0][0] === field[1][1] && field[0][0] === field[2][2] && field[0][0] !== false)
            || (field[0][2] === field[1][1] && field[0][2] === field[2][0]) && field[0][2] !== false;
    }
 
    function printResult(field) {
        field.forEach((el) => {
            console.log(el.join("\t"));
        })
    }
 
    let gameWon = false;
    let turnsPlayed = 0;
    let currentPlayerSign = "X";

    const gameField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
 
    for (let i = 0; i < arr.length; i++) {
        const [x, y] = arr[i].split(" ").map(el => parseInt(el));
        if (gameField[x][y]) {
            console.log("This place is already taken. Please choose another!");
        } else {
            gameField[x][y] = currentPlayerSign;
            turnsPlayed++;
            if (hasWin(gameField, [x,y])) {
                gameWon = true;
                console.log(`Player ${currentPlayerSign} wins!`);
                printResult(gameField);
                break;
            } else if (turnsPlayed == 9) {
                break;
            }
            currentPlayerSign = currentPlayerSign == "X" ? "O" : "X";
        }
    }
 
    if (!gameWon) {
        console.log("The game ended! Nobody wins :(");
        printResult(gameField);
    }
}