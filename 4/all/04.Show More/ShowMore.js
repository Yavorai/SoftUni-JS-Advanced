function showText() {
    document.getElementById('text').style.display = 'inline'
    document.getElementById('more').style.display = 'none'

}

//===============================

function showText() {
    // select and reveal text
    const text = document.getElementById('text');
    text.style.display = 'inline';

    // select and hide button   
    const button = document.getElementById('more');
    button.style.display = 'none';
}