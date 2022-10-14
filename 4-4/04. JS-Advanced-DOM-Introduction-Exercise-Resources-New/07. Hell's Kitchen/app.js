// function solve() {
//   document.querySelector("#btnSend").addEventListener("click", onClick);

//   function onClick() {
//     let input = JSON.parse(document.querySelector("#inputs textarea").value);

//     let avgSalary = 0;
//     let totalSalary = 0;
//     let currAvgSalary = 0;
//     let bestName = "";
//     let output = {};

//     for (let line of input) {
//       let restaurantInfo = line.split(" - ");
//       let restaurantName = restaurantInfo.shift();
//       let workersData = restaurantInfo[0].split(", ");

//       for (let worker of workersData) {
//         let [name, salary] = worker.split(" ");

//         if (!output.hasOwnProperty(restaurantName)) {
//           output[restaurantName] = {};
//         }
//         if (output.hasOwnProperty(restaurantName)) {
//           output[restaurantName][name] = Number(salary);
//         }
//       }
//     }
//     let entries = Object.entries(output);

//     for (let entry of entries) {
//       let key = entry[0];
//       let values = Object.entries(entry[1]);

//       for (let [name, salary] of values) {
//         totalSalary += salary;
//       }

//       avgSalary = totalSalary / values.length;

//       if (avgSalary > currAvgSalary) {
//         currAvgSalary = avgSalary;
//         bestName = key;
//         totalSalary = 0;
//       }
//     }
//     let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

//     let print = "";

//     result.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));
//     document.querySelector(
//       "#bestRestaurant p"
//     ).textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(
//       2
//     )} Best Salary: ${result[0][1].toFixed(2)}`;
//     document.querySelector("#workers p").textContent = print;
//   }
// }
//============================================
// function solve() {
//   document.querySelector("#btnSend").addEventListener("click", onClick);
//   function onClick() {
//     //1 select elements
//     //2 extract/parse input data
//     //3 add obj to keep restaurant workers data
//     //4 fill restaurant obj with input data
//     //5 calc the best restaurant
//     //6 insert best restaurant and workers data into DOM
//     let textAreaElement = document.querySelector('#inputs textarea')
//     let textValue = textAreaElement.value
//     let inputArr = JSON.parse(textValue) //понеже има стрингове за по лесно го превръщаме в масив
//     let restaurants = {}

//     for(let i = 0; i < inputArr.length; i++){
//       let [restaurantName,workersString] = inputArr[i].split(' - ')
//       let inputWorkers = workersString.split(', ').map(w => {
//         let [name, salary] = w.split(' ')
//         return {name, salary: Number(salary)}
//       })
//       if(!restaurants[restaurantName]){
//         restaurants[restaurantName] = {
//           restaurantName,
//           workers: [],
//           getAvgSalary: function (){
//             return this.workers.reduce((acc,el) => acc + el,0) / this.workers.length
//           }
//         }
//       }
//       restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers)
//     }

//       let sortedRestaurants = Object.values(restaurants)
//       .sort((a,b) => {
//         let bAvgSalary = b.workers.reduce((acc,el) => acc + el.salary, 0) / b.workers.length
//         let aAvgSalary = a.workers.reduce((acc,el) => acc + el.salary, 0) / a.workers.length
//         return bAvgSalary - aAvgSalary
//       })
//       let bestRestaurant = sortedRestaurants[0]
//       let sortedWorkers = bestRestaurant.workers.sort((a,b) => b.salary - a.salary)
//       let averageSalary = (bestRestaurant.workers.reduce((acc,el) => acc + el.salary,0) / bestRestaurant.workers.length).toFixed(2)
//       let bestSalary = sortedWorkers[0].salary.toFixed(2)
//       let topRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`
//       let workerString = sortedWorkers.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ')
//       let bestRestaurantElement = document.querySelector('#bestRestaurant p')
//       let workersElement = document.querySelector('#workers p')
//       bestRestaurantElement.textContent = topRestaurantString
//       workersElement.textContent = workerString
//   }
// }

// ["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]


//============================================================
function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let input = document.querySelector('#inputs>textarea') // директно първата textarea
  function onClick() {
    //let arr = input.value // сега е стринг, затова го парсваме към масив
    let arr = JSON.parse(input.value)
    let restaurants = {} // най добре да е обект - key: name / value: worker, avgSalary, bestSalary
    arr.forEach((line) => {
      let tokens = line.split(' - ')
      let name = tokens[0]
      let workersArr = tokens[1].split(', ') // -> ['Peter 500', 'George 300', 'Mark 800']
      let workers = []
      let averageSalary = 0
      let bestSalary = 0
      for(let worker of workersArr){
        let workerTokens = worker.split(' ') // -> ['Peter', '500'], ['George', '300'], ['Mark', '800']
        let salary = Number(workerTokens[1])
        workers.push(
          {
            name: workerTokens[0],
            salary,
          },
        )
        //console.log(workers) -> {name: 'Bob', salary: 1300},{name: 'Joe', salary: 780},{name: 'Jane', salary: 660},
      }
      if(restaurants[name]){ // ако е true или !== undefined
        workers = workers.concat(restaurants[name].workers)
      }
      // restaurants[name] = {
      //   workers,
      //   averageSalary,
      //   bestSalary
      // }
      // //console.log(restaurants) -> {PizzaHut: {…}} -> PizzaHut{workers: Array(3), averageSalary: 0, bestSalary: 0}


    })




  }
}