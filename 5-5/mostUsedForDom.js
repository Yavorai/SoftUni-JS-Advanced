// selecting DOM elements 
let elem1 = document.getElementById('test')
document.querySelector('#test')
document.querySelectorAll('#test li')
// get/set content
elem1.value
elem1.textContent
// traversing DOM
elem1.parentElement  //--> ако не пише node и пише element за предпочитане да работим с тях
elem1.parentNode  //--> може да е html елемент но може и да е дтуг вид елемент -- да се избягват
elem1.children
// create element
let createdElem = document.createElement('p')
// adding to DOM
elem1.appendChild(createdElem)
// delete from DOM
createdElem.remove()
// events
elem1.addEventListener('click', someFunc)
elem1.target  //--> връща елемента върху който е възникнал елемента 
// maybe
e.preventDefault()
elem1.removeEventListener('click', someFunc)


//================================================

function createElements(tagName, textContent, className, event) {
    let element = document.createElement(tagName);
    if (textContent) {
        element.textContent = textContent;
    }
    if (className) {
        element.classList.add(className);
    }
    if (event) {
        element.addEventListener(event.type, event.func);
    }
    return element;
}

function appendChildrenElements(parent, children=[]) {
    children.map(child => parent.appendChild(child));
}