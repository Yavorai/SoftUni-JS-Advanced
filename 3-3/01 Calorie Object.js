function demo(arr){
    let obj = {}
    for(let i = 0; i<arr.length;i+=2){
        let key = arr[i]
        let value = arr[i+1]
        
        obj[key] = Number(value)
    }
    console.log(obj);
}
demo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log('------------------------------');
demo(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])