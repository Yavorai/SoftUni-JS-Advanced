// function subtract() {
//     //console.log('TODO:...');
//     let first = document.getElementById('firstNumber')
//     let numberFirst = Number(first.value)
//     let second = document.getElementById('secondNumber')
//     let numberSecond = Number(second.value)
    
//     let result = numberFirst - numberSecond
    
//     let sumElement = document.getElementById('result')
//     sumElement.textContent = result 
// }

// от input поле се взима с .value - всяко друго с textContent

//================================================

function subtract() {
     let num1Element = document.getElementById('firstNumber')
     let num2Element = document.getElementById('secondNumber')


     let numOne = Number(num1Element.value)
     let numTwo = Number(num2Element.value)


     let result = numOne - numTwo


     let resultDiv = document.getElementById('result')
     resultDiv.textContent = result
}