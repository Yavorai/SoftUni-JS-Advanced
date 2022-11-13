// function demo(...arr) {

//     let containerObj = {}

//     for(let item of arr){
//         let type = typeof item

//         console.log(`${type}: ${item}`);

//         if(containerObj.hasOwnProperty(type)){
//             containerObj[type]++
//         }else {
//             containerObj[type] = 1
//         }
//     } 

//     return Object.entries(containerObj)
//     .sort((a,b) => b[1] - a[1])
//     .forEach(item => console.log(`${item[0]} = ${item[1]}`))

// }
// demo('cat', 42, function () { console.log('Hello world!'); });
// console.log('------------------------------------------');
// demo({ name: 'bob' }, 3.333, 9.999);



// //====================================================
// function argumentInfo(...allArguments) {
//     let obj = {};
//     allArguments.forEach(x => {
//         console.log(`${typeof x}: ${x}`);


//         if (!obj[typeof x]) {
//             obj[typeof x] = 0;
//         }
//         obj[typeof x]++;

//     });
//     for (const element of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
//         console.log(`${element[0]} = ${element[1]}`);
//     }
// }

// //======================================================


function demo(...arr) {
    let obj = {}

    arr.forEach(el => {
        let elType = typeof el
        console.log(`${elType}: ${el}`);

        if(!obj.hasOwnProperty(elType)){
            obj[elType] = 0
        }
        obj[elType]++
    })

    Object.entries(obj).sort((a,b) => {
        let [aKey, aValue] = a
        let [bKey, bValue] = b
        return bValue - aValue
    }).forEach((el) => {
        let [type, value] = el
        console.log(`${type} = ${value}`);
    })


}
demo('cat', 42,42,42, function () { console.log('Hello world!'); });

//=======================================================

function solve(...params){
    let occurrences = {}
    let result = []

    params.forEach(el => {
        let type = typeof(el)
        result.push(`${type}: ${el}`)
        occurrences[type] = occurrences[type] !== undefined
        ? ++occurrences[type]
        : 1
    })
    Object.keys(occurrences)
        .sort((a,b) => occurrences[b] - occurrences[a])
        .forEach(key => result.push(`${key} = ${occurrences[key]}`))

    result.forEach(el => {
        console.log(el);
    })    
    //return result.join('\n')
}