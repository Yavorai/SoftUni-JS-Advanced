
function demo(n1, n2){
    let first = Number(n1)
    let second = Number(n2)

    while(first !== second){
        if(first > second){
            first -= second
        }else{
            second -= first
        }
    }
    console.log(first);
}
demo(15, 5)
demo(2154, 458)

//----------------------------------

function demo(num1,num2){
    while (num2 !== 0){
        let temp = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1
}