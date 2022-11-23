const { expect } = require('chai')
const isSymmetric = require('./isSymmetric')

describe('isSymmetric', () => {

    // първо се тества happy path

    it('return true for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.be.true
    })

    it('return false for valid non - symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false
    })
    it('return false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false
    })
    it('return false for type - coerced elements', () => {
        expect(isSymmetric(['1', 1])).to.be.false
    })

    // test overloading
    it('return true for valid odd-element array', () => {
        expect(isSymmetric([1,1,1])).to.be.true
    })

    it('return true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true
    })
    it('return false for valid non - symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false
    })

})