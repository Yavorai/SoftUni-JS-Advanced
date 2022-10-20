function addItem() {
   let itemsElement = document.getElementById('items')
   let inputElement = document.getElementById('newItemText')

   let liElement = document.createElement('li')
   liElement.textContent = inputElement.value

   let deleteElement = document.createElement('a')
   deleteElement.href = '#'
   deleteElement.textContent = '[Delete]'
   liElement.appendChild(deleteElement)

   itemsElement.appendChild(liElement)

   deleteElement.addEventListener('click', (e) => {
      e.currentTarget.parentElement.remove()
   })
   inputElement.value = ''
}

/*
function addItem() {
   const content = document.getElementById('newItemText').value
   const liElement = document.createElement('li')
   liElement.textContent = content
    const deleteBtn = document.createElement('a')
    deleteBtn.textContent = '[Delete]'
    deleteBtn.href = '#'
    liElement.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', onDelete)

   const ulElement = document.getElementById('items')
   ulElement.appendChild(liElement)
   document.getElementById('newItemText').value = ''

   function onDelete(event){
    event.target.parentElement.remove()
 }
 }
*/ 