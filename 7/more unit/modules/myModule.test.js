const { sum } = require('./myModule')
const { expect } = require('chai') // внасяме експекта от chai

describe('Sum Function', () => {
    it('works', () => {
        // ако тази функция хвърли ексепшън теста не минава !!!
        // ако не --> теста минава
        expect(sum(1,2)).to.equal(3) // -->> очакваме (chai)

    }) // също два параметъра --> име на теста и функция

    it('fails with invalid values', () => {
        expect(sum('a','a')).to.be.NaN
    })
}) // приема два параметъра --> 1. името на комплекта тестове.  2. функцията