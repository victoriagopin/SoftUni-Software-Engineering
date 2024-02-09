import { describe, it } from "mocha";
import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";

describe('Tests', function () {
    it('isGoodLocatin functionality', function () {
        expect(findNewApartment.isGoodLocation('hi', true)).to.equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        let test = function () {
            findNewApartment.isGoodLocation(1, []);
        }
        expect(test).to.throw(Error, 'Invalid input!');
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
    });
    it('isLargeEnough functionality', function () {
        expect(findNewApartment.isLargeEnough([40, 50, 60, 70], 50)).to.equal('50, 60, 70');
        expect(findNewApartment.isLargeEnough([20, 40], 50)).to.equal('');
        expect(findNewApartment.isLargeEnough([100, 110], 100)).to.equal('100, 110');
        let test = function () {
            findNewApartment.isLargeEnough([], -1)
        };
        expect(test).to.throw(Error, 'Invalid input!');
        let test2 = function () {
            findNewApartment.isLargeEnough('hi', 50)
        };
        expect(test2).to.throw(Error, 'Invalid input!');
        let test3 = function () {
            findNewApartment.isLargeEnough([1, 2, 3], 'he')
        };
        expect(test3).to.throw(Error, 'Invalid input!');
    });
    it('isAffordable functionality', function () {
        expect(findNewApartment.isItAffordable(10000, 9000)).to.equal('You don\'t have enough money for this house!');
        expect(findNewApartment.isItAffordable(10000, 11000)).to.equal('You can afford this home!');
        let test = function () {
            findNewApartment.isItAffordable([], false);
        };
        expect(test).to.throw(Error, 'Invalid input!');
        let test2 = function () {
            findNewApartment.isItAffordable(0, -1);
        };
        expect(test2).to.throw(Error, 'Invalid input!')
    })
})