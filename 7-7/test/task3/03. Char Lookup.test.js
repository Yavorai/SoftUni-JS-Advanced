let { expect } = require('chai')
let lookupChar = require('../03. Char Lookup')

describe('lookupChar', () => {
    it('Should return undefined when first parameter is not a string', () => {
        expect(lookupChar(undefined, 1)).to.equal(undefined)
        expect(lookupChar(1, 1)).to.equal(undefined)
        // assert.strictEqual(lookupChar(undefined, 1), undefined)
    })

    it('Should return undefined when first parameter is not a integer', () => {
        expect(lookupChar('some', undefined)).to.equal(undefined)
        expect(lookupChar('some', null)).to.equal(undefined)
        expect(lookupChar('some', 1.23)).to.equal(undefined)
        expect(lookupChar('some', '1')).to.equal(undefined)
    })

    it('Should return "Incorrect index" when second parameter is not within index range', () => {
        expect(lookupChar('some', -1)).to.equal('Incorrect index')
        expect(lookupChar('some', 4)).to.equal('Incorrect index')
    })

    it('Should return correct char when both parameters are valid', () => {
        expect(lookupChar('other', 0)).to.equal('o')
        expect(lookupChar('other', 3)).to.equal('e')
    })
})


//====================================

// describe("Char Lookup", () => {
//     it("Test invalid input", () => {
//         expect(lookupChar(0, 0)).to.be.undefined;
//         expect(lookupChar('0', '0')).to.be.undefined;
//         expect(lookupChar('a', 1.1)).to.be.undefined;
//     });

//     it("Test if value of the index is incorrect ", () => {
//         expect(lookupChar('a', -1)).to.be.equal("Incorrect index");
//         expect(lookupChar('a', 1)).to.be.equal("Incorrect index");
//     });

//     it("Test string and index are correct", () => {
//         expect(lookupChar('a', 0)).to.be.equal('a');
//         expect(lookupChar('asd', 1)).to.be.equal('s');
//     });
// })