// function factory(libraryObj, ordersArr) {
//     let result = []
//     for(let order of ordersArr){
//         let obj = {}
//         let template = order.template
//         for(let proppp in template){
//             obj[proppp] = template[proppp]
//         }
//         let parts = order.parts
//         for(let part of parts){
//             obj[part] = libraryObj[part];
//         }
//         result.push(obj)
//     }
//     return result
// }
// const library = {
//   print: function () {
//     console.log(`${this.name} is printing a page`);
//   },
//   scan: function () {
//     console.log(`${this.name} is scanning a document`);
//   },
//   play: function (artist, track) {
//     console.log(`${this.name} is playing '${track}' by ${artist}`);
//   },
// };
// const orders = [
//   {
//     template: { name: "ACME Printer" },
//     parts: ["print"],
//   },
//   {
//     template: { name: "Initech Scanner" },
//     parts: ["scan"],
//   },
//   {
//     template: { name: "ComTron Copier" },
//     parts: ["scan", "print"],
//   },
//   {
//     template: { name: "BoomBox Stereo" },
//     parts: ["play"],
//   },
// ];
// const products = factory(library, orders);
// console.log(products);
// //=======================================================================

// function demo(lib, list) {
//     // for every order in list
//     // - create obj
//     // - copy template props
//     // for every element in parts
//     // -- compose function from library into obj
//     // - store obj
//     const result = [];
//     for (let order of list) {
//       const object = {};
//       const template = order.template; // 1
//       for (let prop in template) {
//         object[prop] = template[prop];
//       }
//       const parts = order.parts; // 1
//       for (let part of parts) {
//         object[part] = lib[part];
//       }
//       result.push(object);
//     }
//     return result;
//   }

//==============================================================================
function demo(lib,list){ // factory function
let result = []
for(let order of list){
    let obj = {}
    let template = order.template
    for(let prop in template){ // makes copy of template
        obj[prop] = template[prop]
    }
    let parts = order.parts
    for(let part of parts){
        obj[part] = lib[part]
    }
    result.push(obj)
}
return result
}
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']
    },
  ];
  const products = demo(library, orders);
  console.log(products);

  // или :0

  function factory(lib,list){
    return list.map(order => {
        const object = Object.assign({}, order.template) // празен обект, обект от който да взема и да пълни в празния
        for(let part of order.parts){
            object[part] = lib[part]
        }
        return object
    })
  }