function demo(n,k){
    const arr = [1]
    for(let i = 1; i < n; i++){
        arr.push(arr.slice(-k).reduce((a,v) => a + v, 0))
    }
    //return arr
    console.log(arr);
}
demo(6, 3)
demo(8, 2)


//==========================================================


function demo1(n,k){
    const sequence = [1]

    for(let i = 1;i < n; i ++){
        let tempArray = sequence.slice(-k)
        let sum = 0
        for(let num of tempArray){
            sum += num
        }
        sequence.push(sum)
    }
    console.log(sequence);
}
demo1(6, 3)
demo1(8, 2)