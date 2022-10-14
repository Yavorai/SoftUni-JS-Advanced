
function demo(arr){
    let obj = {}
    for(let i = 0; i < arr.length; i+= 2){
        let product = arr[i]
        let calories = arr[i + 1]
        obj[product] = Number(calories)
    }
    console.log(obj);
}
demo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
demo(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])

//========================

// while(arr.length != 0){
    //     let calories = arr.pop() // може и с shift
    //     let product = arr.pop()
//     obj[product] = Number(calories)
// }