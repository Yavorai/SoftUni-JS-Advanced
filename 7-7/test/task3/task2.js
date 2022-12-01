function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
module.exports = isOddOrEven
// rules:

// Trivial cases
// 1. Bad cases -> throws or returns special value
// 2. Correct cases -> function works as expected
// - standard case
// - edge cases that should pass
// -- depend of the type of date
// -- depend of the description
// 3. line by line check line coverage
// 4. think of ways to break the code so it works almost the same 