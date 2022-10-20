let numberElement = document.getElementById('number')

let incrementButtonElement = document.getElementById('increment')
let decrementButtonElement = document.getElementById('decrement')

//  2  // second method attach eventhandler by even property
incrementButtonElement.onclick = () => {
    let currentNumber = Number(numberElement.textContent)
    numberElement.textContent = currentNumber + 1
}
//  3  // attach by DOM vent handler/event listener   PREFERED
decrementButtonElement.addEventListener('click', function(){
    let currentNumber = Number(numberElement.textContent)
    numberElement.textContent = currentNumber - 1
})
 //  1  // attach eventhandler by attibute
function clearCounter (){
    numberElement.textContent = 0
}