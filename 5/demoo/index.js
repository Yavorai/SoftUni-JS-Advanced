let ulElement = document.getElementById('movie-list')  //1
let newMovie = document.createElement('li')            //2
newMovie.textContent = 'Man of steel'                  //3
ulElement.appendChild(newMovie)                        //4
// clone element
//let copyElement = newMovie.cloneNode() // така ще клонира само самия елемент 
let copyElement = newMovie.cloneNode(true) // + всичко надолу - text node  съдържанието е children на елемента
copyElement.textContent += ' 2'
ulElement.appendChild(copyElement) 