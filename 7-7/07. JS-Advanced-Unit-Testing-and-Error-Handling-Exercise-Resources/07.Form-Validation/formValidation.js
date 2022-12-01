function validate() {

    let submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', validateFormHandler)

    let isCompanyCheckbox = document.getElementById('company')
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler)

    function validateFormHandler(e){
        e.preventDefault() // ако страницата рефрешва --> закачен е за клика 
        //---------------------------------------------------------------------
        let usernameInput = document.getElementById('username')
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/
        let usernameIsValid = usernameRegex.test(usernameInput.value)
        setBorder(usernameInput, usernameIsValid)
        //---------------------------------------------------------------------
        let emailInput = document.getElementById('email')
        let emailRegex = /^.*@.*\..*$/
        let emailIsValid = emailRegex.test(emailInput.value)
        setBorder(emailInput, emailIsValid)
        //---------------------------------------------------------------------
        let passwordRegex = /^\w{5,15}$/
        let passwordInput = document.getElementById('password')
        let confirmPasswordInput = document.getElementById('confirm-password')
        let passwordIsValid = passwordRegex.test(passwordInput.value)
        let passwordsAreOk = passwordIsValid && passwordInput.value === confirmPasswordInput.value
        setBorder(passwordInput, passwordsAreOk)
        setBorder(confirmPasswordInput, passwordsAreOk)
        //---------------------------------------------------------------------
        let companyNumberIsValid = false
        let isCompanyCheckbox = document.getElementById('company')
        if(isCompanyCheckbox.checked){
            let companyNumberInput = document.getElementById('companyNumber')
            if(companyNumberInput.value.trim() !== "" && !isNaN(Number(companyNumberInput.value))){
                let companyNumber = Number(companyNumberInput.value)
                if(companyNumber >= 1000 && companyNumber <= 9999){
                    companyNumberIsValid = true
                }
            }
            setBorder(companyNumberInput, companyNumberIsValid)
        }
        //---------------------------------------------------------------------
        let validDiv = document.getElementById('valid')
        let mainInputsAreValid = usernameIsValid && emailIsValid && passwordsAreOk
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid)
        let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none'
    }    

    function onIsCompanyHandler(e){
        let companyInfoFieldset = document.getElementById('companyInfo')
        companyInfoFieldset.style.display = e.target.checked ? 'block' : 'none'

    }

    function setBorder(element, isValid){
        if(isValid){
            element.style.setProperty('border', 'none')
        }else{
            element.style.setProperty('border-color', 'red')
        }
    }
}

//===============================================================

// var 2 

function validate() {
    const btn = document.querySelector('#submit');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const isCompany = document.getElementById('company'); //checkbox
    const companyInfo = document.querySelector('fieldset#companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    btn.type = 'button';

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const passwordPattern = /^[a-zA-Z0-9_]{5,15}$/;
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]*\.[a-zA-Z0-9]*(\.[a-zA-Z0-9]+)*$/;

    isCompany.addEventListener('change', ()=>{
        if (isCompany.checked){
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    btn.addEventListener('click', ()=>{
        let usernameError = false;
        let passwordError = false;
        let emailError = false;
        let companyError = false;

        if (usernamePattern.test(username.value)){
            username.style = 'border: none';
            usernameError = false;
        } else {
            username.style = 'border-color: red';
            usernameError = true; 
        }        

        if (passwordPattern.test(password.value) && password.value == confirmPass.value){
            password.style = 'border: none';
            confirmPass.style = 'border: none';
            passwordError = false;
        } else {
            password.style = 'border-color: red';
            confirmPass.style = 'border-color: red';
            passwordError = true;
        }

        if (emailPattern.test(email.value)){
            email.style = 'border: none';
            emailError = false;
        } else {
            email.style = 'border-color: red';
            emailError = true;
        }

        if (isCompany.checked){
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999 && companyNumber.value.length == 4){
                companyNumber.style = 'border: none';
                companyError = false;
            } else {
                companyNumber.style = 'border-color: red';
                companyError = true;
            }
        } else {
            companyError = false;
        }

        if (usernameError == false && passwordError == false && emailError == false && companyError == false){
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });
}
