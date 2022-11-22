function getNumber(){
    let randomNumber = Math.random()
    if(randomNumber < 0.5){ // 50 процента от случаите
        throw new Error('Your number is too low') // throw работи като return за функцията от която е изпълнен - спира я
        // or
        // throw 'string' (some message)
        // or throw {} obj with information
    }
    return Math.floor(randomNumber * 100) // за да стане кръгло число
}

//let number = getNumber() // извиква се от app func
//console.log(number);

// var 1
function app (){
    try{    // кода който се очаква да гръмне !!!!! --->>> functions
        let number = getNumber()
        //console.log(number);
    }catch(err){ // подава се err защото лет е блок скоуп и долу не може да се достъпи
        console.log(err);
    }
}
app()
// var 2
function app (){
    let number; // декларира се горе за да е достъпна в скоупа надолу
    try{    
         number = getNumber()
    }catch(err){ // тук е грешката хвърлена от throw !!!
        console.log(number);
        console.log(err.stack); // имаме достъп до call stack - при какви обстоятелства е възникнала грешката трябва да се ползва --> throw new Error
    }finally{ // само заради асинхронното програмиране

        console.log('always executes last');
    }
}
app()