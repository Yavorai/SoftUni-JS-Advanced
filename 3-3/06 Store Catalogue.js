// // function demo(array){
// //     let result = array.sort((a,b) => a.localeCompare(b))
// //     let current = []
// //     let firstChar = '';
// //     for(let i = 0; i < result.length; i++){
// //         current = result[i].split(' : ')
// //         if(result[i][0] !== firstChar){
// //             console.log(result[i][0]);
// //         }
// //         console.log(`  ${current[0]}: ${current[1]}`);
// //         firstChar = result[i][0]
// //     }
// // }
// // demo(['Appricot : 20.4',
// // 'Fridge : 1500',
// // 'TV : 1499',
// // 'Deodorant : 10',
// // 'Boiler : 300',
// // 'Apple : 1.25',
// // 'Anti-Bug Spray : 15',
// // 'T-Shirt : 10']
// // )
// // console.log('--------------------');
// // ['Banana : 2',
// // 'Rubic's Cube : 5',
// // 'Raspberry P : 4999',
// // 'Rolex : 100000',
// // 'Rollon : 10',
// // 'Rali Car : 2000000',
// // 'Pesho : 0.000001',
// // 'Barrel : 10']

// //===================================================
// // function demo(array){

// // }
// // demo(['Appricot : 20.4',
// // 'Fridge : 1500',
// // 'TV : 1499',
// // 'Deodorant : 10',
// // 'Boiler : 300',
// // 'Apple : 1.25',
// // 'Anti-Bug Spray : 15',
// // 'T-Shirt : 10']
// // )

// //=================================================================================

// function demo(input) {
//   let dictionary = {};

//   while (input.length) {
//     let [name, price] = input.shift().split(" : ");
//     let firstLetter = name[0];

//     if (!dictionary[firstLetter]) {
//       dictionary[firstLetter] = [];
//     }
//     //console.log(dictionary);
//     dictionary[firstLetter].push({ name, price: Number(price) });
//   }
//   let result = []
//   //console.log(dictionary);
//    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {

//     let values = entry[1]
//     .sort((a,b) => (a.name).localeCompare(b.name))
//     .map(product => `  ${product.name}: ${product.price}`)
//     .join('\n')

//     //console.log(values);

//     let string = `${entry[0]}\n${values}`

//     result.push(string)
//   })

//   return result.join('\n')
// }
// console.log(
//   demo([
//     "Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10",
//   ])
// );
// console.log("--------------");
// function demo(inputArr) {
//   let productCatalogue = {};
//   for (let i = 0; i < inputArr.length; i++) {
//     let [productName, productPrice] = inputArr[i].split(" : ");
//     productPrice = Number(productPrice);

//     let initial = productName[0].toUpperCase();

//     if (productCatalogue[initial] === undefined) {
//       productCatalogue[initial] = {};
//     }
//     productCatalogue[initial][productName] = productPrice;
//   }
//   let result = [];
//   let initialSorted = Object.keys(productCatalogue).sort((a, b) =>
//     a.localeCompare(b)
//   );
//   for (let key of initialSorted) {
//     let products = Object.entries(productCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
//     result.push(key);
//     let productAsString = products.map((x) => `  ${x[0]}: ${x[1]}`).join("\n");
//     result.push(productAsString);
//   }
//   return result.join("\n");
// }
// console.log(
//   demo([
//     "Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10",
//   ])
// );
//========================================
// но по добре решението с обект
function storage(inputArr){
  inputArr.sort((a,b) => a.localeCompare(b));
  let letter;
  for(let i = 0; i< inputArr.length; i++){
      let[name,price] = inputArr[i].split(' : ');
      price = Number(price);
      if (name[0] !== letter) {
          letter = name[0];
          console.log(letter);
      }
      console.log(`  ${name}: ${price}`);
  }
}
storage([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
])