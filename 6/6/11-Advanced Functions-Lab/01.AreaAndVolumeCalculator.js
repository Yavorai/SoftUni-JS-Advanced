// /**
//  *
//  * @param {function} area
//  * @param {function} vol
//  * @param {string} input
//  */

// function solve(area, vol, input) {
//     const cubes = JSON.parse(input);

//     const result = [];

//     for (let cube of cubes) {
//         const cubeArea = area.apply(cube);
//         const cubeVolume = vol.apply(cube);

//         result.push({
//             area: cubeArea,
//             volume: cubeVolume,
//         });
//     }

//     return result;
// }
// // or:
// // function solve(area, vol, input) {
// //     return JSON.parse(input).map(cube => ({
// //         area: area.apply(cube),
// //         volume: vol.apply(cube)
// //     }));
// // }

// const data = `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`

// console.log(solve(area, vol, data));
// // result:
// // [
// //     { area: 2, volume: 20 },
// //     { area: 49, volume: 490 },
// //     { area: 10, volume: 100 }
// // ]

// function area() {
//     return Math.abs(this.x * this.y);
// };

// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };
//============================================================================================
// function area() {
//   return Math.abs(this.x * this.y);
// }

// function vol() {
//   return Math.abs(this.x * this.y * this.z);
// }
// // var 1
// function solve(area, vol, input) {
//   let coordinates = JSON.parse(input);
//   //console.log(coordinates); --> [{  },{  },{  }]
//   let result = [];
//   for (let points of coordinates) {
//     result.push({
//       area: area.call(points), // връзва ме по контекст - points
//       volume: vol.call(points),
//     });
//   }
//   return result;
// }
// // var 2
// function solve(area, vol, input) {
//   let coordinates = JSON.parse(input);
//   let result = coordinates.map((points) => {
//     return {
//       area: area.call(points), // връзва ме по контекст - points
//       volume: vol.call(points),
//     };
//   });
//   return result
// }
// // var 3
// function solve(area, vol, input) {
//     return JSON.parse(input).map(x => ({area: area.call(x), volume: vol.call(x)}))
//   }

// console.log(
//   solve(
//     area,
//     vol,
//     `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
//   )
// );

//===================================================================
function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
function solve(areaIn, volIn, input) {
  let data = JSON.parse(input);
  // итеративно
  //let result = [];
  // for (let cube of data) {
  //   let current = {
  //     area: areaIn.call(cube),
  //     volume: volIn.call(cube),
  //   };
  //   result.push(current);
  // }
  // функционално
  let result = data.map(cube => {
      let curr = {
        area: areaIn.call(cube),
        volume: volIn.call(cube),
      }
      return curr
  })
  return result
}
solve(
  area,
  vol,
  `[
      {"x":"1","y":"2","z":"10"},
      {"x":"7","y":"7","z":"10"},
      {"x":"5","y":"2","z":"10"}
      ]`
);
console.log(solve(
  area,
  vol,
  `[
      {"x":"1","y":"2","z":"10"},
      {"x":"7","y":"7","z":"10"},
      {"x":"5","y":"2","z":"10"}
      ]`
));
