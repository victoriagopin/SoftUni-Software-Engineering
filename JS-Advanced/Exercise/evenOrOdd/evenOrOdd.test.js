import { describe, it } from 'mocha';
import { expect } from 'chai';
import { isOddOrEven } from '../evenOrOdd/evenOrOdd.js';

describe('Tests 1', function () {
    it('Case 1: valid inputs', function () {
        expect(isOddOrEven('hi')).to.equal('even');
        expect(isOddOrEven('odd')).to.equal('odd');
    });
    it('Case 2: invalid inputs', function () {
        expect(isOddOrEven(2)).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);

    })

})