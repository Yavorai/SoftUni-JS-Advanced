function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)')
    let sum = Array.from(costElements).reduce((a,x) => {
        let currValue = Number(x.textContent) || 0
        return a + currValue
    },0)
    let resultElement = document.getElementById('sum')
    resultElement.textContent = sum
}

function sumTable() {
    // select all data rows (exclude first and last row)
    // for each row
    // -- select last colum
    // -- add content to sum
    // display sum in total row

    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1)
    let sum = 0
    for(let row of rows){
      const value = Number(row.lastElementChild.textContent)
      sum += value
      document.getElementById('sum').textContent = sum
}
}