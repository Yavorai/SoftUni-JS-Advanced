let movieElements = document.querySelectorAll('#movie-list li')
movieElements.forEach(el => {
    el.addEventListener('click', (e) => {
       e.currentTarget.style.textDecoration = 'line-through'
    })
})