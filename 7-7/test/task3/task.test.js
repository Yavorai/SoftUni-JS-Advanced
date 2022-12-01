let { expect } = require('chai')
let isOddOrEven = require('./task2')

describe('test', () => {
    it('test 1', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined)
        expect(isOddOrEven(null)).to.equal(undefined)
        expect(isOddOrEven(1)).to.equal(undefined)
        expect(isOddOrEven(true)).to.equal(undefined)
    })
    it('should return even with even string', () => {
        expect(isOddOrEven('some')).to.equal('even')
        expect(isOddOrEven('or')).to.equal('even')
    })
    it('should return odd with odd string', () => {
        expect(isOddOrEven('odd')).to.equal('odd')
        expect(isOddOrEven('hello')).to.equal('odd')
    })
})





//=================================================================================
describe('is odd or even', () => {
    
    it('returns undefined if argument is not a string (array test)', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('returns undefined if argument is not a string (object test)', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('returns undefined if argument is not a string (number test)', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('returns undefined if argument is not a string (boolean test 1)', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('returns undefined if argument is not a string (boolean test 2)', () => {
        expect(isOddOrEven(false)).to.be.undefined;
    });

    it('returns even if given empty string', () => {
        expect(isOddOrEven('')).to.equal('even');
    });

    it('returns odd if given string with lenght of 1', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });

    it('returns even if given string with lenght of 6', () => {
        expect(isOddOrEven('abcdef')).to.equal('even');
    });

    it('returns odd if given string with lenght of 7', () => {
        expect(isOddOrEven('abcdefg')).to.equal('odd');
    });
});