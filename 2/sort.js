let numbers = [6,10,3,9]
let numbers2 = [6,10,3,9]
numbers.sort(function(a,b){
    if(a < b){
        return -1
    }else if(a > b){
        return 1
    }else{
        return 0
    }
})
console.log(numbers);

numbers2.sort((a,b) => {
    return a - b
})
console.log(numbers2);