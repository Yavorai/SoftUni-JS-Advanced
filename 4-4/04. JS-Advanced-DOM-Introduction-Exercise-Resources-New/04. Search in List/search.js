function search() {
  let userWord = document.getElementById("searchText").value;
  let townsElement = document.querySelectorAll("#towns li");
  let match = document.getElementById("result");
  let count = 0;
  for (let town of townsElement) {
    if (town.textContent.includes(userWord) && userWord !== "") {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      count++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
  match.textContent = `${count} matches found`;
}
//===================================================
function search() {
  let searchInputElement = document.getElementById("searchText").value;
  let allLiElements = Array.from(document.querySelectorAll("#towns li"));
  allLiElements.forEach(el => {
    el.style.fontWeight = "normal";
    el.style.textDecoration = "none";
  });
  let filterLi = allLiElements
  .filter(x => x.textContent/*.toLowerCase()*/.includes(searchInputElement)); // за джъдж без то лолър кейс
    let mapLi = filterLi.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
    });
    let resultDiv = document.getElementById('result')
    resultDiv.textContent = `${filterLi.length} matches found`
}
//=========================================================
function search() {
  let listItems = document.querySelectorAll('#towns>li')
  let input = document.querySelector('input').value
  let result = document.getElementById('result')
  let sum = 0
  for(let li of listItems){
    if((li.textContent).toLowerCase().includes(input.toLowerCase()) && input !== ""){
      li.style.fontWeight = 'bold'
      li.style.textDecoration = 'underline'
      sum++
    }else{
      li.style.fontWeight = ''
      li.style.textDecoration = ''
    }
  }
  result.textContent = `${sum} matches found`
}