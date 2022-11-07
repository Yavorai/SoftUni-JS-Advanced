function processor(input) {
    let newArr = [];

    let obj = {
        add: str => newArr.push(str),
        remove: str => newArr = newArr.filter(x => x !== str),
        print: () => console.log(newArr.join(',')),
    }

    input.forEach(x => {
        const [command, value] = x.split(' ')
        obj[command](value)
    });
}
processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
// again,again
console.log('=============================================================');
processor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
// pesho,george