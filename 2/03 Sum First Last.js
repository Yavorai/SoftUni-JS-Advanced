// ако е масив от един елемент ще върне NaN
function demo(input){
    let firstEl = Number(input.shift())
    let lastEl = Number(input.pop()) // let lastEl = Number(input.pop() || 0) или let lastEl = Number(input.pop() || firstEl)
    let sum = firstEl + lastEl
    return sum
}
demo(['20', '30', '40'])
demo(['5', '10'])