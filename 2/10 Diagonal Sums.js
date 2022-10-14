function demo(matrix){
    const last = matrix.length - 1; 
    let sumOne = 0
    let sumTwo = 0

    for(let i = 0; i < matrix.length; i++){
        sumOne += matrix[i][i]
        sumTwo += matrix[i][last - i]
    }
    console.log(`${sumOne} ${sumTwo}`);
}
demo([[20, 40],
    [10, 60]])
    console.log('---------------------------');
demo([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])