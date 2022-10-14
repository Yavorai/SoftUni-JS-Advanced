function demo(arr,numRotations){

    for(let i = 0; i < numRotations; i ++){
        let lastEl = arr.pop()
        arr.unshift(lastEl)
    }
    console.log(arr.join(' '));

}
demo(['1', 
'2', 
'3', 
'4'], 
2)
demo(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)

//===============================================

function demo(arr, rotations){
    for(let i = 0; i < rotations; i++){
        const num = arr.pop() // arr.unshift(arr.pop())
        arr.unshift(num)
    }
    console.log(arr.join(' '));
}