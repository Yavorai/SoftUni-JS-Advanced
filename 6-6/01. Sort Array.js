function demo(arr, str) {
    if (str === 'asc'){
        arr = arr.sort((a,b) => a - b)
        return arr
    }else if (str === 'desc'){
        arr === arr.sort((a,b) => b - a)
        return arr
    }
}
console.log(demo([14, 7, 17, 6, 8], 'asc'))
console.log(demo([14, 7, 17, 6, 8], 'desc'))

//=====================================
function sol(arr, str) {
    return str === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
//=====================================
function sortArray(arr, order) {
    if (order === "asc") {
        return arr.sort((a, b) => Number(a - b))
    } else if (order === 'desc') {
        return arr.sort((a, b) => Number(b - a))
    }
    else {
        throw Error("Wrong order !");
    }
}

//======================================

function solve(arr,sortOrder){
    return sortOrder === 'asc'
    ? arr.sort((a,b) => a-b)
    : arr.sort((a,b) => b-a)
}