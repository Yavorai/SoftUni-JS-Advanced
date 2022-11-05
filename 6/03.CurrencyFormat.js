function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;

}

/**
 * 
 * @param {string} separator 
 * @param {string} symbol 
 * @param {boolean} symbolFirst 
 * @param {function} formatter 
 */
function createFormatter(separator,symbol,symbolFirst,formatter) {
    return (value) => formatter(separator,symbol,symbolFirst,value);
}

// or :
// function foo(a, b, c, d) {
//     return d.bind(undefined, a, b, c)
// }
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
