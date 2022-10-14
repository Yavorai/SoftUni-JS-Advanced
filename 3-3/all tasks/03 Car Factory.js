function demo(wantedCar) {
  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [
    { type: "hatchback", color: wantedCar.color },
    { type: "coupe", color: wantedCar.color },
  ];

  let weelsize = wantedCar.weelsize % 2 == 1 ? wantedCar.weelsize : wantedCar.weelsize -1

  return {
      model: wantedCar.model,
      engine: engines.filter(e => e.power >= wantedCar.power)[0], // да вземе най малкия понеже те са подредени възходящо
      carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
      weels: [wantedCar.weelsize, weelsize, weelsize, weelsize]
  }
}
console.log(demo({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  }));
console.log("------------");
demo({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});

//=======================================

// function carFactory(car) {
//     let inStock = {
//       engines: {
//         'small': { power: 90, volume: 1800 },
//         'normal': { power: 120, volume: 2400 },
//         'monster': { power: 200, volume: 3500 },
//       },
//       carriage: {
//         'hatchback': { type: 'hatchback', color: car.color },
//         'coupe': { type: 'coupe', color: car.color },
//       },
//       wheels: wheels,
//     }
  
//     car.engine = findEngine(car.power);
//     car.carriage = inStock.carriage[car.carriage];
//     car.wheels = inStock.wheels(car.wheelsize);
  
//     delete car.power;
//     delete car.color;
//     delete car.wheelsize;
  
//     return car;
  
//     //find right engine
//     function findEngine(power) {
//       let engine;
//       const stock = [90, 120, 200];
  
//       stock.sort((a, b) => {
//         return Math.abs(power - a) - Math.abs(power - b);
//       })
  
//       const found = stock[0];
  
//       if (found == inStock.engines.small.power) {
//         engine = inStock.engines.small;
//       } else if (found == inStock.engines.normal.power) {
//         engine = inStock.engines.normal;
//       } else if (found == inStock.engines.monster.power) {
//         engine = inStock.engines.monster;
//       }
//       return engine;
//     }
  
//     //calculate wheel size
//     function wheels(size) {
//       let wheels = [0,0,0,0]
//       if (size % 2 == 0) {
//         size -= 1;
//       }
//       wheels.fill(size);
//       return wheels;
//     }
//   }
//   carFactory({
//     model: 'VW Golf II',
//     power: 110,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
//   }
//   )
//   carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
//   }
//   )


//   //===============================

//   function carFactory(customerRequirements) {
//     const {
//       model,
//       power,
//       carriage,
//       color,
//       wheelsize
//     } = customerRequirements;
  
//     function getEngine(power) {
//       const engines = [
//         { power: 90, volume: 1800 },
//         { power: 120, volume: 2400 },
//         { power: 200, volume: 3500 },
//       ].sort((a, b) => {
//         return Math.abs(power - a.power) - Math.abs(power - b.power);
//       });
  
//       return engines[0];
//     };
  
//     function getCarriage(carriage, color) {
//       return {
//         type: carriage,
//         color,
//       }
//     };
  
//     function getWheels(size) {
//       size % 2 == 0 ? size-= 1 : size;
//       return [size, size, size, size];
//     }
//     //final product
//     return {
//       model,
//       engine: getEngine(power),
//       carriage: getCarriage(carriage, color),
//       wheels: getWheels(wheelsize),
//     }
//   }
  
//   console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
//   }));
//   console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
//   }));
