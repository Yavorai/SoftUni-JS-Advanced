function cars(input) {
    let created = {};

    let obj = {
        create: (n, inherits, parentName) =>
            created[n] = inherits ? Object.create(created[parentName]) : {},
        set: (n, k, v) => created[n][k] = v,
        print: n => {
            const entry = []
            for (const key in created[n]) {
                entry.push(`${key}:${created[n][key]}`)
            }
            console.log(entry.join(','))
        }
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(' ')
        obj[c](n, k, v)
    });
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
// Output :
// color:red
// model:new,color:red