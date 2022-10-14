function demo(inputObj){
    let resultCar = {}
    let engine = {}
    let carriage = {}

    resultCar.model = inputObj.model

    if(inputObj.power <= 90){
        engine.power = 90
        engine.volume = 1800
    }else if(inputObj.power <= 120){
        engine.power = 120
        engine.volume = 2400
    }else if(inputObj.power <= 200){
        engine.power = 200
        engine.volume = 3500
    }

    carriage.type = inputObj.carriage
    carriage.color = inputObj.color

    if(inputObj.wheelsize % 2 === 0){
        inputObj.wheelsize--
    }
    resultCar.engine = engine
    resultCar.carriage = carriage
    resultCar.wheels = [inputObj.wheelsize,inputObj.wheelsize,inputObj.wheelsize,inputObj.wheelsize]

    return resultCar
}
demo({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })
console.log('---------------');
demo({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })

//===============================================================

function demo(input){
    // ако е с destructuring - навсякъде по-долъ се маха инпута
    // const {
    //     model,
    //     power,
    //     carriage,
    //     color,
    //     wheelsize
    // } = input

    function getEngine(power){
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ].sort((a,b) => a.power - b.power)

        // с for
        // let result;
        // for(let i=0; i<engines.length;i++){
        //     if(engines[i].power>=power){
        //         result=engines[i]
        //         break
        //     }
        // }
        //return result
        // с find
        return engines.find(engine => engine.power >= power)
    }

    function getCarriage(carriage,color){
        return {
            type: carriage,
            color,
        }
    }

    function getWheels(wheelsize){
        let wheel = Math.floor(wheelsize) % 2 === 0 ? Math.floor(wheelsize) -1 : Math.floor(wheelsize)
        return [wheel, wheel,wheel,wheel]  // Array[4].fill(wheel, 0, 4) прави арей започващ от нулев индекс и повтаря 4 елемента
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize),
    }
}
console.log(demo({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log('---------------');
console.log(demo({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));