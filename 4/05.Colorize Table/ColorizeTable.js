// function colorize() {
//     // TODO
//     let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td')
//     rowElements.forEach(x => {
//         x.style.backgroundColor = 'teal'
//     })
// }

function colorize() {
    let rowElements = document.getElementsByTagName('tr')
    let rows = Array.from(rowElements)
    rows.forEach((x,i) => {
        if(i % 2 !== 0){
            x.style.backgroundColor = 'teal'
        }
    })
    
}


function colorize() {
    const rows = [...document.querySelectorAll('tr:nth-child(2n)')].forEach( e => e.style.background = 'teal')
}