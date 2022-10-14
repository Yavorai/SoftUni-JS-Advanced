let obj = {
    firstProperty: 'valuePropertyOne',
    secondProperty: 'valuePropertyOTwo',
    thirdProperty: 'valuePropertyThree',
}
let deepCopyObj = JSON.parse(JSON.stringify(obj))
obj.firstProperty = 'none'
console.log(obj);
console.log(deepCopyObj);