function demo(arr){
    let obj = {}
    //{letter (A,B,C): {product, price}}
    for(let line of arr){
        let [product,price] = line.split(' : ')
        let letter = product[0]
        if(obj.hasOwnProperty(letter) == false){
            obj[letter] = {}
        }
        // obj[letter] = {product: price} или така, същото е
        obj[letter][product] = price // инициализираме поперти в обекта
    }
    //console.log(obj);
    let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b))
    //console.log(sortedLetters);
    for(let letter of sortedLetters){
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b))
        for(let product of sortedProducts){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}
demo(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])
console.log('--------------');


//======================

// function solve(input) {
//     let sorted = input.sort((a, b) => a.localeCompare(b));
//     let char = ``;
//     for (let el of sorted) {
//         let [product, price] = el.split(` : `);
//         if (el[0] !== char) {
//             console.log(el[0]); 
//             console.log(` ${product}: ${price}`);
//             char = el[0];
//         } else {
//             console.log(` ${product}: ${price}`);
//         }
//     }
// }