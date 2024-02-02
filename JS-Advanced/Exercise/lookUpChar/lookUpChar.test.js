import { describe, it } from "mocha";
import { expect } from "chai";
import { lookupChar } from "./lookUpChar.js";

describe('Tests for function', function () {
    it('Case 1: valid inputs', function () {
        expect(lookupChar('viki', 2)).to.equal('k');
        expect(lookupChar('hello', 0)).to.equal('h');
    });
    it('Case 2: invalid inputs', function () {
        expect(lookupChar(2, 2)).to.equal(undefined);
        expect(lookupChar('str', [])).to.equal(undefined);
        expect(lookupChar([], 'h')).to.equal(undefined);
        expect(lookupChar('str', 1.2)).to.equal(undefined);
    });
    it('Case 3: valid input, invalid index', function () {
        expect(lookupChar('viki', 6)).to.equal('Incorrect index');
        expect(lookupChar('viki', 4)).to.equal('Incorrect index');
        expect(lookupChar('hello', -1)).to.equal('Incorrect index')
    });
})