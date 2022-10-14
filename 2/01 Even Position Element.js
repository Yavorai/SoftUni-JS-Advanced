function demo(input){
    let evenPo = []
    for(let i = 0; i < input.length; i++){
        if(i % 2 === 0){
            evenPo.push(input[i])
        }
    }
    console.log(evenPo.join(" "));
}
demo(['20', '30', '40', '50', '60'])
demo(['5', '10'])


function demo(input){
    let result = ''
    for(let i = 0; i < input.length; i++){
        if(i % 2 === 0){
            result += input[i] + ' '
        }
    }
    console.log(result);
}
demo(['20', '30', '40', '50', '60'])
demo(['5', '10'])