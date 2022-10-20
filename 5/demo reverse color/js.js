let divElement = document.getElementById('text-block')
divElement.addEventListener('mouseover', (e) => {
    let backgroundColorElement = e.currentTarget.style.backgroundColor
    if(backgroundColorElement == 'black'){
        e.currentTarget.style.backgroundColor = 'white'
        e.currentTarget.style.color = 'black'
    }else{
        e.currentTarget.style.backgroundColor = 'black'
        e.currentTarget.style.color = 'white'
    }
})