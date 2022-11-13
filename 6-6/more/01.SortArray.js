function sortArr(arr, str) {
    if (str == 'asc') {
        return arr.sort((a, b) => {
            return a - b;
        });
    } else if (str == 'desc') {
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'))
// [6, 7, 8, 14, 17]
console.log(sortArr([14, 7, 17, 6, 8], 'desc'))
// [17, 14, 8, 7, 6]