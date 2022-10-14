function demo(piesArr, start, end){
    let startIndex = piesArr.indexOf(start)
    let endIndex = piesArr.indexOf(end) + 1
    return piesArr.slice(startIndex, endIndex)
}
let result = demo(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')
console.log(result);

demo(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')