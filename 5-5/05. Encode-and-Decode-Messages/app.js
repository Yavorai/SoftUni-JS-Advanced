

function encodeAndDecodeMessages() {
    const action = (s, t = 'decode') => s.split('').map(x =>
        String.fromCharCode(t === 'encode' ? x.charCodeAt(0) + 1 : x.charCodeAt(0) - 1)
    ).join('');
    const container = document.querySelector('#container');
    const [encode, decode] = container.querySelectorAll('textarea');
 
    container.addEventListener('click', e => {
        if(e.target.tagName === "BUTTON"){
            if(e.target.textContent.includes("Encode")) {
                decode.value = action(encode.value, 'encode');
                encode.value = '';
            }else{
                decode.value = action(decode.value);
            }
        }
    })
}

//====================================================

function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea')
    let buttons = document.querySelectorAll('button')
    let map = {
        encode: {
            textField: textAreas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1),
        },
        decode: {
            textField: textAreas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1),
        },
    }
    document.getElementById('main').addEventListener('click', function (e) {
        if(e.target.tagName !== 'BUTTON'){
            return
        }
        let type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode'
        // взимаме съобщението и го преобразуваме
        let message = map[type].text.value.split('').map([type].func).join('')
        map.encode.textField.value = ''
        map.decode.textField.value = message
    })
        
}

//================================================

function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea')
    let buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', function (e){
        let message = textAreas[0].value
        .split('')
        .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('')

        textAreas[0].value = ''
        textAreas[1].value = message
    })

    buttons[1].addEventListener('click', function (e){
        let message = textAreas[1].value
        .split('')
        .map((char) => String.fromCharCode(char.charCodeAt(0) - 1))
        .join('')

        textAreas[1].value = message
    })
}