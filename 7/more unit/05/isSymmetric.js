function isSymmetric(arr){
    if(!Array.isArray(arr)){
        return false // non - arrays are not symmetric
    }
    let reversed = arr.slice(0).reverse() // clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed))
    return equal
}

module.exports = isSymmetric