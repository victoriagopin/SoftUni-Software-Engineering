import { describe, it } from "mocha";
import { expect } from "chai";
import { mathEnforcer } from "./mathEnforcer.js";

describe('Function tests', function () {
    it('addFive functionality', function () {
        expect(mathEnforcer.addFive(10)).to.equal(15);
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        expect(mathEnforcer.addFive(-5)).to.eqls(0);
        expect(mathEnforcer.addFive(-10.5)).to.equal(-5.5);
        expect(mathEnforcer.addFive('test')).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
    })
    it('subtractTen functionality', function () {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        expect(mathEnforcer.subtractTen(5.3)).to.equal(-4.7);
        expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5);
        expect(mathEnforcer.subtractTen('hi')).to.equal(undefined);
        expect(mathEnforcer.subtractTen([])).to.equal(undefined);
    })
    it('sum functionality', function () {
        expect(mathEnforcer.sum(1, 2)).to.equal(3);
        expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        expect(mathEnforcer.sum(-10, -20)).to.equal(-30);
        expect(mathEnforcer.sum(3.5, 2.5)).to.equal(6);
        expect(mathEnforcer.sum(-3.5, -1.5)).to.equal(-5);
        expect(mathEnforcer.sum(1, 3.5)).to.equal(4.5);
        expect(mathEnforcer.sum(4.5, 1)).to.equal(5.5);
        expect(mathEnforcer.sum(-4.4, 10)).to.equal(5.6);
        expect(mathEnforcer.sum(1, 'test')).to.equal(undefined);
        expect(mathEnforcer.sum('')).to.equal(undefined);
        expect(mathEnforcer.sum({}, 2)).to.equal(undefined);
        expect(mathEnforcer.sum('hi', 'ts')).to.equal(undefined);
    })

})