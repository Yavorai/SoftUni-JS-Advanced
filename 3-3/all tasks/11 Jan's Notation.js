function jansNotation(arr) {
    let numbers = [];

    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    for (let line of arr) {
        if (typeof line == 'number') {
            numbers.push(line);
        } else {
            if (numbers.length < 2) {
                return 'Error: not enough operands!';
            } else {
                b = numbers.pop();
                a = numbers.pop();
                numbers.push(operations[line](a, b));
            }
        }

    }

    if (numbers.length > 1) {
        return 'Error: too many operands!';
    } else {
        return numbers.join('');
    }
}

console.log(jansNotation([3, 4, '+']));
console.log(jansNotation([5, 3, 4, '*', '-']));
console.log(jansNotation([7, 33, 8, '-']));
console.log(jansNotation([15, '/']));
console.log(jansNotation([31, 2, '+', 11, '/']));
console.log(jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']));