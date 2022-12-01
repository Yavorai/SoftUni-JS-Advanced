function validate() {
    let emailInput = document.getElementById('email')
    emailInput.addEventListener('change', validateEmail)

    function validateEmail(){
        let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/
        let isValid = emailRegex.test(emailInput.value)
        if(isValid){
            emailInput.classList.remove('error')
        }else{
            emailInput.classList.add('error')
        }
    }
}

//==============================

function validate() {
    let inputElement = document.querySelector('body #email');
    inputElement.addEventListener('change', (e) => {
        if (e.currentTarget.value) {
            inputElementCheck = e.currentTarget.value.match(/^[a-z\d]+@{1}[a-z\d]+.{1}[a-z]{3}$/gm);
            !inputElementCheck ? e.currentTarget.className = 'error' : e.currentTarget.className = '';
        }
    });
    
}