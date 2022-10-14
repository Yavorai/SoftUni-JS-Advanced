function colorize() {
    const rows = document.querySelectorAll('tr')
    for (let index = 1; index < rows.length; index+= 2) {
        rows[index].style.background = 'teal'
        
    }
}

//=========================================

function colorize() {
    const rows = [...document.querySelectorAll('tr:nth-child(2n)')].forEach( e => e.style.background = 'teal')
}

function colorize() {
    let rows = document.querySelectorAll('tr')
    for(let i = 1; i < rows.length; i += 2){
        rows[i].style.background = 'teal'
    }
}