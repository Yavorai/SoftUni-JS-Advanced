function demo(lib, list) {
  // for every order in list
  // - create obj
  // - copy template props
  // for every element in parts
  // -- compose function from library into obj
  // - store obj

  const result = [];

  for (let order of list) {
    const object = {};

    const template = order.template; // 1

    for (let prop in template) {
      object[prop] = template[prop];
    }

    const parts = order.parts; // 1

    for (let part of parts) {
      object[part] = lib[part];
    }

    result.push(object);
  }
  return result;
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
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = demo(library, orders);
console.log(products);

//===============================================

// function objectFactory(library, orders){
//     let composedArr = [];

//     for (let order of orders){
//         let name = order.template.name;
//         let composed = {
//             name
//         };
//         let parts = order.parts;

//         for (let part of parts){
//             composed[part] = library[part];
//         }

//         composedArr.push(composed);
//     }

//     return composedArr;
// }
// const library = {
//     print: function () {
//       console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//       console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//       console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
//   };
//   const orders = [
//     {
//       template: { name: 'ACME Printer'},
//       parts: ['print']
//     },
//     {
//       template: { name: 'Initech Scanner'},
//       parts: ['scan']
//     },
//     {
//       template: { name: 'ComTron Copier'},
//       parts: ['scan', 'print']
//     },
//     {
//       template: { name: 'BoomBox Stereo'},
//       parts: ['play']
//     },
//   ];

// const products = objectFactory(library, orders);
// console.log(products);
