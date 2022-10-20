function validate() {
    let regex = /[a-z]+@[a-z]+\.[a-z]+/g
    let emailFromInput = document.getElementById('email')
    emailFromInput.addEventListener('change', validator)
    function validator(){
        if(emailFromInput.value.match(regex)){
            emailFromInput.className = ""
        }else{
            emailFromInput.className = 'error'
        }
    }
}
//=====================================================================
function validate() {
    let inputElem = document.getElementById('email');
    inputElem.addEventListener('change', validatorHandler);
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;
    function validatorHandler() {
        if (inputElem.value.match(pattern)) {
            inputElem.className = '';
        } else {
            inputElem.className = 'error';
        }
    }
}
//=====================================================================
function validate() {
    let regex = /^\w*\@(\w*\.\w+)$/gm;
    const inputElement = document.querySelector("#email");
    inputElement.addEventListener("change", ifChange);
    function ifChange() {
      regex.test(inputElement.value)
        ? inputElement.classList.remove("error")
        : inputElement.classList.add("error");
    }
  }