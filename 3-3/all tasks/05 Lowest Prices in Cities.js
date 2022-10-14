function demo(arr){
    let obj = {}
    // key:{product : {town, price}}

    for(let i = 0; i < arr.length; i++){

        let text = arr[i]
        let productInfo = text.split(' | ')
        let town = productInfo[0]
        let product = productInfo[1]
        let price = Number(productInfo[2])

        //obj[product] -> undefined = false
        //obj.hasOwnProperty(product)

        if(!obj.hasOwnProperty(product)){
            obj[product] = {town, price}
        }else{
            if(price < obj[product].price){
                obj[product] = {town, price}
            }
        }
    }
    // Sample Product -> 1000 (Sample Town)

    // Object.keys, Object.values, Object.entries
    let productNames = Object.keys(obj)
    for(let i = 0; i < productNames.length; i ++){
        let productName = productNames[i]
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
    }
}
demo(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])