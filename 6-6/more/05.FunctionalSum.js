function sum(n1) {
    let sum = n1;
    function add(n2) {
        sum += n2;
        return add;
    }
    add.toString = () => {
        return sum
    }
    return add;
}
console.log(sum(4)(3).toString()); // 7
console.log(sum(1).toString()); // 1
console.log(sum(1)(6)(-3).toString()); // 4