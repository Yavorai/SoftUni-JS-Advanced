function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient')
    let resultElement = document.getElementById('result')
    let gradientMouseOverHandler = (e) => {
        //console.log(e);
        let percent = Math.floor((e.offsetX / gradientElement.clientWidth) * 100) 
        resultElement.textContent = `${percent}%`
    }
    gradientElement.addEventListener('mousemove', gradientMouseOverHandler)
}

function attachGradientEvents() {
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onMouseOver)
    let result = document.getElementById('result')

    function onMouseOver(ev){
            //gradient.removeEvenListener()
    result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%'
    }
}

//==========================================================================
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
};