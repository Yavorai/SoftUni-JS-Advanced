function solution() {
    let str = '';

    return {
        append: v => (str += v),
        removeStart: x => (str = str.slice(x)),
        removeEnd: x => (str = str.slice(0, -x)),
        print: () => console.log(str),
    }

    // append(string) - append the given string at the end of the internal string
    // removeStart(n) - remove the first n characters from the string, n is an integer
    // removeEnd(n) - remove the last n characters from the string, n is an integer
    // print - print the stored string on the console
}



let firstZeroTest = solution(); 

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); // loa


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); // 34
