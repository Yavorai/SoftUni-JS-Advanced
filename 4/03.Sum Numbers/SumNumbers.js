function calc() {
    // TODO: sum = num1 + num2
    let firstNumElement = document.getElementById('num1')
    let secondNumElement = document.getElementById('num2')

    let firstNum = Number(firstNumElement.value)
    let secondNum = Number(secondNumElement.value)

    let sumTotal = firstNum + secondNum
    let resultElement = document.getElementById('sum')
    resultElement.value = sumTotal
}


function calc(){
    let numOne = Number(document.getElementById('num1').value)
    let numTwo = Number(document.getElementById('num2').value)

    let result = numOne + numTwo
    
    if(Number.isNaN(result)){
        alert('Please enter numbers!')
    }else{
        document.getElementById('sum').value = result
    }
    
}