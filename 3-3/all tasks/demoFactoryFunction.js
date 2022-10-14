// function Developer(name){
//     this.name = name
//     this.type = "Developer"
// }
// function Tester(name){
//     this.name = name
//     this.type = "Tester"
// }
// function EmployeeFactory(){
//     this.create = (name, type) => {
//         switch(type){
//             case 1:
//                 return new Developer(name)
//                 break;
//                 case 2:
//                 return new Tester(name)
//                 break;
//         }
//     }
// }
// function say(){
//     console.log('Hi, I am ' + this.name + ' and I am a ' + this.type);
// }

// const employeeFactory = new EmployeeFactory()
// const employee = []

// employee.push(employeeFactory.create('Patrick', 1))
// employee.push(employeeFactory.create('Bobi', 2))
// employee.push(employeeFactory.create('Bo John', 1))

// employee.forEach(emp => {
//     say.call(emp)
// })

// factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//         console.log('draw');
//     },
//   };
// }
// const circle1 = createCircle(1)
// console.log(circle1);
// const circle2 = createCircle(2)
// console.log(circle2);


function createCircle(a,b,c) {
  return {
    a,
    b,
    c,
    sum() {
       return a + b + c
    },
  };
}
const circle1 = createCircle(2,4,6)
console.log(circle1.sum());
const circle2 = createCircle(2,3,1).sum()
console.log(circle2);