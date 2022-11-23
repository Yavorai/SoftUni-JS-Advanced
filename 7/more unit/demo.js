function catcher(){
    try {
        new Array(-1)
    }catch (er){
        if(er instanceof RangeError){ // конкретен туп грешка ако искаме
            console.log('Caught Ragne error');
        }else {
            throw er
        }
    } 
}
catcher()

// MOCHA -->> изпълнява тестовете

// CHAI -->> извършва сравненията / библиотека

// describe --> групира множество тестове --> 'it' всеки 'it' е един тест