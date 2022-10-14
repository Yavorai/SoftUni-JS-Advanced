// function calc() {
//     let n1 = document.getElementById('num1').value
//     let n2 = document.getElementById('num2').value
//     let result = Number(n1) + Number(n2)

//     if(Number.isNaN(result)){
//         alert('Please enter numbers!')
//     }else{
//         document.getElementById('sum').value = result
//     }
// }

// function calc(){
//     let numOne = Number(document.getElementById('num1').value)
//     let numTwo = Number(document.getElementById('num2').value)

//     let result = numOne + numTwo
    
//     if(Number.isNaN(result)){
//         alert('Please enter numbers!')
//     }else{
//         document.getElementById('sum').value = result
//     }
    
// }

function calc(){
   let num11 = document.getElementById('num1').value
   let num22 = document.getElementById('num2').value
   let result = Number(num11) + Number(num22)
   document.getElementById('sum').value = result
}