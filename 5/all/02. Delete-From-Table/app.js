// function deleteByEmail() {
//     // read input field value
//     // select all table cells form the last column
//     // iterate over cells
//     // if text matches input value -> delete row
//     //-get cell parent row
//     //-remove row from parentNode
//     // display result message
//     const email = document.querySelector('input[name="email"]').value
//     const rows = Array.from(document.querySelectorAll('tbody tr'))

//     let deleted = false 

//     for(let row of rows){
//         if(row.children[1].textContent == email){
//             row.parentNode.removeChild(row)

//             deleted = true
//             document.getElementById('result').textContent = 'Deleted.'
//         }
//     }
//     if(deleted !== true){
//         document.getElementById('result').textContent = 'Not found.'

//     }
// }
// optimize

function deleteByEmail() {
   
    const email = document.querySelector('input[name="email"]').value
    const resultElement = document.getElementById('result')
    const rows = Array.from(document.querySelectorAll('tbody tr'))

    const matches = rows.filter(row => row.children[1].textContent ==email)

    if(matches.length > 0){
        matches.forEach(r => r.remove())
        resultElement.textContent = 'Deleted.'
    }else{
        resultElement.textContent = 'Not found.'

    }
}