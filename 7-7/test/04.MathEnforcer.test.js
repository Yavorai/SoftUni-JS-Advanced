let { expect } = require('chai')
let mathEnforcer = require('./04.MathEnforcer')

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined)
            expect(mathEnforcer.addFive(null)).to.equal(undefined)
            expect(mathEnforcer.addFive('20')).to.equal(undefined)
        })
        it('Should return number plus 5 when parameter is valid number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15)
            expect(mathEnforcer.addFive(1.1 + 2.2)).to.closeTo(8.3, 0.01)
            expect(mathEnforcer.addFive(-10)).to.equal(-5)
        })
    })
    describe('subtractTen', () => {
        it('Should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined)
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined)
            expect(mathEnforcer.subtractTen('20')).to.equal(undefined)
        })
        it('Should return number plus 5 when parameter is valid number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
            expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.closeTo(-6.7, 0.01)
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        })
    })
    describe('sum', () => {
        it('Should return undefined when first parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined,1)).to.equal(undefined)
            expect(mathEnforcer.sum(null,1)).to.equal(undefined)
            expect(mathEnforcer.sum('13',1)).to.equal(undefined)
        })
        it('Should return undefined when second parameter is not a number', () => {
            expect(mathEnforcer.sum(1,undefined)).to.equal(undefined)
            expect(mathEnforcer.sum(1,null)).to.equal(undefined)
            expect(mathEnforcer.sum(1,'13')).to.equal(undefined)
        })
        it('Should return the sum of both numbers when both parameters are valid numbers', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30)
            expect(mathEnforcer.sum(1.1 + 2.2, 3.3)).to.closeTo(6.6, 0.01)
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15)
        })
    })
   
})

//===========================================================================

describe('Add Five Method', () => {
    it('Should is a function', () => {
        assert.isFunction(mathEnforcer.addFive);
    });
    it('Should return number when passing correct param', () => {
        assert.isNumber(mathEnforcer.addFive(10));
    });
    it('Should return correct result when passing correct param', () => {
        assert.equal(mathEnforcer.addFive(10), 15);
    });
    it('Should return correct result when passing negative num', () => {
        assert.equal(mathEnforcer.addFive(-10), -5);
    });
    it('Should return correct result when passing negative zero', () => {
        assert.equal(mathEnforcer.addFive(-0), 5);
    });
    it('Should return correct result when passing floating-point num', () => {
        assert.closeTo(mathEnforcer.addFive(10.12222), 15.12,0.01);
    });
    it('Should return undefined when passing not number', () => {
        assert.equal(mathEnforcer.addFive([]), undefined);
    });
});
describe('Subtract Ten Method', ()=> {
    it('Should is a function', () => {
        assert.isFunction(mathEnforcer.subtractTen);
    });
    it('Should return number when passing correct param', () => {
        assert.isNumber(mathEnforcer.subtractTen(10));
    });
    it('Should return correct result when passing correct param', () => {
        assert.equal(mathEnforcer.subtractTen(20), 10);
    });
    it('Should return correct result when passing negative num', () => {
        assert.equal(mathEnforcer.subtractTen(-20), -30);
    });
    it('Should return correct result when passing negative zero', () => {
        assert.equal(mathEnforcer.subtractTen(-0), -10);
    });
    it('Should return correct result when passing floating-point num', () => {
        assert.closeTo(mathEnforcer.subtractTen(10.12222), 0.12,0.01);
    });
    it('Should return undefined when passing not number', () => {
        assert.equal(mathEnforcer.subtractTen(undefined), undefined);
    });
});
describe('Sum Method',() => {
    it('Should is a function', () => {
        assert.isFunction(mathEnforcer.sum);
    });
    it('Should return number when passing correct param', () => {
        assert.isNumber(mathEnforcer.sum(10,10));
    });
    it('Should return correct result when passing correct param', () => {
        assert.equal(mathEnforcer.sum(20,20), 40);
    });
    it('Should return correct result when passing negative num to first param', () => {
        assert.equal(mathEnforcer.sum(-20,20), 0);
    });
    it('Should return correct result when passing negative nums', () => {
        assert.equal(mathEnforcer.sum(-20,-20), -40);
    });
    it('Should return correct result when passing negative zero', () => {
        assert.equal(mathEnforcer.sum(-0,-0), 0);
    });
    it('Should return correct result when passing floating-point num', () => {
        assert.closeTo(mathEnforcer.sum(10.12222, 20.12222), 30.24,0.01);
    });
    it('Should return undefined when passing not number to first param', () => {
        assert.equal(mathEnforcer.sum(undefined, 10), undefined);
    });
    it('Should return undefined when passing not number to second param', () => {
        assert.equal(mathEnforcer.sum(10,'0'), undefined);
    });
});