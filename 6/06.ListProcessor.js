function processor(input) {
    let newArr = [];

    let obj = {
        add: str => newArr.push(str),
        remove: str => newArr = newArr.filter(x => x !== str),
        print: () => console.log(newArr.join(',')),
    }

    input.forEach(x => {
        const [commad, value] = x.split(' ')
        obj[commad](value)
    });
}


processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
// again,again

processor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
// pesho,george