function info(...arr) {
    let count = {};
    let result = arr.map(x => {

        count[typeof x] = (count[typeof x] || 0) + 1

        return `${typeof x}: ${x}`
        
    })
    result.forEach(el => console.log(el))
    Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .map(([key, value]) => console.log(`${key} = ${value}`))

}
info('cat', 42, function () { console.log('Hello world!'); });
/*
Output:
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
*/
console.log('------------------------------------------');

info({ name: 'bob' }, 3.333, 9.999);
/*
object: { name: 'bob' }
number: 9.999
number: 3.333
number = 2
object = 1
*/