function addItem() {
    const liElement = document.createElement('li')
    liElement.textContent = document.getElementById('newItemText').value
    document.getElementById('items').appendChild(liElement)
    document.getElementById('newItemText').value = ''
}

function remove (){
    const liElement = document.getElementById("hohoho")
    liElement.parentNode.removeChild(liElement)
}