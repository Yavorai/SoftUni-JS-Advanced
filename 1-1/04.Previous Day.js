function demo(year, month,day){
let dateInput = `${year}-${month}-${day}`
let date = new Date(dateInput)

date.setDate(date.getDate() - 1)
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`); // months starts from 0

}
demo(2016, 9, 30)
demo(2016, 10, 1)


/*
function solve(year, month, day) {
    let date = new Date(year, month-1, day);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}
*/