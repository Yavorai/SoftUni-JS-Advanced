function toggle() {
    let button = document.querySelector('.button')
    let text = document.querySelector('#extra')

    if(button.textContent === 'More'){
        button.textContent = 'Less'
        text.style.display = 'block'
    }else{
        button.textContent = 'More'
        text.style.display = 'none'

    }
}
//===========================================
function toggle() {
   let button = document.getElementsByClassName('button')[0]
   let textDiv = document.getElementById('extra')
   button.textContent = button.textContent === 'More' ? 'Less' : 'More'
   textDiv.style.display = textDiv.style.display === 'block' ? 'none' : 'block' 
}