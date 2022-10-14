// function extractText() {
//     let ulElement = document.getElementById('items')
//     let textareaElement = document.getElementById('result')
//     textareaElement.textContent = ulElement.textContent
// }


// function extractText() {
//     const items = Array.from(document.querySelectorAll('li'))
//     console.log(items);
//     const result = items.map(e => e.textContent).join('\n')
//     document.getElementById('result').value = result
// }

function extractText() {
    // {
    //     // 3 ways 
    // //1st
    // document.querySelectorAll('li')
    // //2nd
    // document.getElementsByTagName('li')
    // //3rd
    // let list = document.getElementById('items')
    // list.children
    // }
    let items = Array.from(document.querySelectorAll('li')) // връща node list и го правим на масив
    let resultEl = items.map(e => e.textContent).join('\n')
    document.getElementById('result').value = resultEl
}