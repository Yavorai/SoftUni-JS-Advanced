function demo(fruit, weight, price){
    let fruitType = fruit
    let fruitWeight = weight // grams / 1000 = kilos
    let pricePerKilo = price

    let weightInKilos = fruitWeight / 1000

    let money = weightInKilos * pricePerKilo

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);
}
demo('orange', 2500, 1.80)
demo('apple', 1563, 2.35)

//---------------------------------------

function demo(fruit, weight, price){
    const weightKg =  weight / 1000
    const money = weightKg * price
    return `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`
}