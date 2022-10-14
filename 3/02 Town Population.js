function demo(arr) {
  let towns = {};

  for (let el of arr) {
    let [town, populationNaN] = el.split(" <-> ");
    let population = Number(populationNaN);

    // if (towns[town] == undefined) {
    //   towns[town] = population;
    // } else {
    //   towns[town] += population;
    // }

    // if(towns[town] !== undefined){
    //     population += towns[town]
    // }
    // towns[town] = population

    if (!towns[town]) {
      towns[town] = 0;
    }
    towns[town] += population;
  }
  for (let each in towns) {
    console.log(`${each} : ${towns[each]}`);
  }
}
demo([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("----------------------------------------");
demo([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
