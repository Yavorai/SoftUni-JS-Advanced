function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick); //това е бутона който вече е селектиран
   let input = document.getElementById('searchField')
   let rows = document.querySelectorAll('tbody tr')
   function onClick() {
      for(let row of rows){
         row.classList.remove('select')
         if(input.value !== "" && row.innerHTML.includes(input.value)){
            row.className = 'select'
         }
      }
      input.value = ""
   }
}
//================================
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   function onClick(){
      //1. select el
      let searchEl = document.getElementById('searchField')
      let rowEl = Array.from(document.querySelectorAll('.container tbody tr'))
      let searchText = searchEl.value
      //1A. clear styles from previous search
      rowEl.forEach(el => {
         el.classList.remove('select'); // премахва класа 
      })
      //2. find matching row le to text
      //3. modifi syle for matching rows
      let filteredRows = rowEl.filter(el => {
         let values = Array.from(el.children);
         if(values.some(x => x.textContent.includes(searchText))){
            el.classList = 'select' // добавя класа и стилизацията вече работи
         }
      })
      //4 clear text field
      searchEl.value = ''
   }
}
//===================================================
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   function onClick(){
      let input = document.querySelector('#searchField').value.toLowerCase()
      let rows = document.querySelectorAll('tbody tr')

      for(let row of rows){
         if(row.textContent.toLowerCase().includes(input)){
            row.setAttribute('class', 'select')
         }else{
            row.removeAttribute('class')
         }
      }
   }
}

//=======================================================
function solve(){
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   
   let body = document.querySelector('tbody')
   let input = document.querySelector('searchField')

   let convertedRows = function(rows,input){
      return Array.from(rows).map((row) => {
         if(row.textContent.includes(input) && input !== ''){
            row.setAttribute('class','select')
         }else{
            row.removeAttribute('class')
         }
         return row
      })
   }

   function onClick(){
      let rows = body.children
      body.innerHTML = convertedRows(rows, input.value)
   }
}