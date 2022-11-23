const { expect } = require('chai') // сиустемите се зареждат първо
const sum = require('./sumNum')

describe('Sum numbers', () => {

    it('sums single number', () => {
        expect(sum([1])).to.equal(1)
    })
    // test overloading
    it('sums two numbers', () => {
        expect(sum([1,1])).to.equal(2)
    })   
    it('sums several numbers', () => {
        expect(sum([2,3,4])).to.equal(9)
    })
})

// теста се пише по спецификация не по кода --> тестваме само това което е по спецификация