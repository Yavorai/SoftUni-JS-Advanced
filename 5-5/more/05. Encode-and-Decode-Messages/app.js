function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];

    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];


    encodeBtn.addEventListener('click', encodeOn);
    decodeBtn.addEventListener('click', decodeOn);

    function encodeOn(e) {
        let encodeText = messageInput.value;
        let code = '';
        for (let i = 0; i < encodeText.length; i++) {
            code += String.fromCharCode(encodeText[i].charCodeAt(encodeText[i]) + 1);
        }

        messageInput.value = '';
        messageOutput.value = code;
    }

    function decodeOn(e) {
        let encodeText = messageOutput.value;
        let code = '';
        for (let i = 0; i < encodeText.length; i++) {
            code += String.fromCharCode(encodeText[i].charCodeAt(encodeText[i]) - 1);
        }

        messageOutput.value = code;
    }
}