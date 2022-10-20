function addItem() {
    // select input field and read input value
    const text = document.getElementById('newItemText').value
    
    // create new <li> element 
    const liElement = document.createElement('li')
    // set text to new element to input value
    liElement.textContent = text
    // select list from page
    const ulElement = document.getElementById('items')
    // append new element to list
    ulElement.appendChild(liElement)
    document.getElementById('newItemText').value = '' // чисти полето след клик
}

// short 

// const liElement = document.createElement('li')
// liElement.textContent = document.getElementById('newItemText').value
// document.getElementById('items').appendChild(liElement)