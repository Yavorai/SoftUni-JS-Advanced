function solve() {
  let inputElement = document.getElementById('input')
  let textArr = inputElement.value.split('.').filter(s => s !== "")
  let resultDiv = document.getElementById('output')
  while(textArr.length > 0){
    let text = textArr.splice(0,3).map(x => x + '.')
    let p = document.createElement('p') // динамично създаване на елемент
    p.textContent = text
    resultDiv.appendChild(p)
  }
}
//===============================================================================
function solve() {
  //1 select element 
  //2 extract text from text area 
  //3 split text by '.' to get sentences
  //4 group sentences by 3 in one p
  //5 insert p into DOM
  let textAreaElement = document.getElementById('input')
  let textValue = textAreaElement.value
  let sentencesSplit = textValue
  .split('.')
  .filter(x => x !== '')
  .map(x => x + '.')
  let paragraphRoof = Math.ceil(sentencesSplit.length / 3)
  let resultDiv = document.getElementById('output')
  for(let i = 0; i < paragraphRoof; i++){
    resultDiv.innerHTML += `<p>${sentencesSplit.splice(0,3).join('')}</p>`
  }

}
