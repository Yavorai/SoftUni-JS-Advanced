function deleteByEmail() {
    let emailElement = document.querySelector('input[name="email"]')
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)')
    let resultElement = document.getElementById('result')

    // nodeList and htmlCollection can use for of
    // for(let tdElement of emailCellElements){

    // }
    // or
    let emailElementsArr = Array.from(emailCellElements)
    let targetElement = emailElementsArr.find(x => x.textContent === emailElement.value)
    // how to delete
    // old way
    //console.log(targetElement.parentNode.removeChild(targetElement)); // взима родителя и оттам да се изтрие нековото дете
    // new way
    if(targetElement){
        targetElement.parentNode.remove() // маха го от дървото а не от памета
        resultElement.textContent = 'Deleted.'
    }else{
        resultElement.textContent = 'Not found.'
    }
}   