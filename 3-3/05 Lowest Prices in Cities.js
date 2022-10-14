// function demo(arr){

//     let products = []
//     while(arr.length > 0){
//         let [town, product, price] = arr.shift().split(' | ')
//         //let price = Number(priceStr)
//         if(products.filter(x => x.product === product).length > 0){
//             let obj = products.find(x => x.product === product) // първият само

//             if(obj.price > Number(price)){
//                 obj.price = Number(price)
//                 obj.town = town
//             }
//         }else{
//             let obj = {product,town,price:Number(price)}
//             products.push(obj)
//         }
//     }
//     for(let product of products){
//         console.log(`${product.product} -> ${product.price} (${product.town})`);
//     }
// }
// demo(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10'])

//===========================================================

// function demo(input) {
//   let log = {};
//   while (input.length) {
//     let sale = input.shift();
//     let [town, product, price] = sale.split(" | ");

//     if (!log[product]) {
//       // ако го няма го създай
//       log[product] = { town, price: Number(price) };
//     } else {
//       log[product] =
//         log[product].price <= Number(price)
//           ? log[product]
//           : { town, price: Number(price) };
//     }
//   }
//   let result = [];
//   for (let product in log) {
//     result.push(`${product} -> ${log[product].price} (${log[product].town})`);
//   }
//   return result.join("\n");
// }
// console.log(
//   demo([
//     "Sample Town | Sample Product | 1000",
//     "Sample Town | Orange | 2",
//     "Sample Town | Peach | 1",
//     "Sofia | Orange | 3",
//     "Sofia | Peach | 2",
//     "New York | Sample Product | 1000.1",
//     "New York | Burger | 10",
//   ])
// );

//===================================

function demo(inputArr) {
  let products = {};
  for (let i = 0; i < inputArr.length; i++) {
    let [townName, productName, productPrice] = inputArr[i].split(" | ");
    productPrice = Number(productPrice);

    if (!products.hasOwnProperty(productName)) {
      products[productName] = {};
    }

    products[productName][townName] = productPrice;
  }
  let result = []
  for(let key in products){
    let townsSorted = Object.entries(products[key]).sort((a,b) => a[1] - b[1])
    let cheapestTown = townsSorted[0]
    result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
  }    
  return result.join('\n')
}
console.log(
  demo([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
