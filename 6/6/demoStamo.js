let sequence = (function(){

    let counter = 0 // не трябва да се вижда отвън и да се манипулира брояча

    function getCurrValue(){
        return counter
    }

    function getNextValue(){
        return ++counter
    }

    return {
        getCurrValue, //  показва докъде сме стигнали
        getNextValue,
    }

})()
console.log(sequence.getCurrValue()); 
console.log(sequence.getNextValue());
console.log(sequence.getCurrValue());
