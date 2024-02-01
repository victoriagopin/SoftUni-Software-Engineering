import { describe, it } from 'mocha';
import { expect } from 'chai';
import { onlineStore } from './onlineStore.js';

describe('Tests for isProductAvailable', function () {
    it('Case 1: valid inputs', function () {
        expect(onlineStore.isProductAvailable('bread', 0)).to.equal('Sorry, bread is currently out of stock.');
        expect(onlineStore.isProductAvailable('water', 2)).to.equal('Great! water is available for purchase.');

    });
    it('Case 2: Should throw an error with the message "Invalid input."', function () {
        // Use a function to invoke the code that may throw an error
        const functionUnderTest = () => {
            onlineStore.isProductAvailable(2, 'hi');
        };

        const functionUnderTest2 = () => {
            onlineStore.isProductAvailable(2, 2);
        };

        expect(functionUnderTest2).to.throw(Error, 'Invalid input.');
        // Use Chai's .throw assertion to check for the specific error
        expect(functionUnderTest).to.throw(Error, 'Invalid input.');
    });

})

describe('Tests for canAffordProduct', function () {
    it('Case 1: valid inputs', function () {
        expect(onlineStore.canAffordProduct(20, 30)).to.equal('Product purchased. Your remaining balance is $10.');
        expect(onlineStore.canAffordProduct(1.3, 2)).to.equal('Product purchased. Your remaining balance is $0.7.');
        expect(onlineStore.canAffordProduct(9, 9)).to.equal('Product purchased. Your remaining balance is $0.');
    });
    it('Case 2: invalid inputs', function () {
        const testFunction = () => {
            onlineStore.canAffordProduct('hi', 30);
        }

        expect(testFunction).to.throw(Error, 'Invalid input');

        const testFunction2 = () => {
            onlineStore.canAffordProduct(1, 'tets');
        }

        expect(testFunction2).to.throw(Error, 'Invalid input.');
    });
    it('Case 3: if input is valid but less than 0', function () {
        expect(onlineStore.canAffordProduct(10, 9)).to.equal('You don\'t have sufficient funds to buy this product.')
    })

});

describe('Tests for getRecommendedProducts', function () {
    it('Case 1: valid inputs', function () {
        expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photography' }], 'Photography')).to.equal('Recommended products in the Photography category: Camera')
        expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Movie')).to.equal('Sorry, we currently have no recommended products in the Movie category.')
    });
    it('Case 2: invalid inputs', function () {
        let testFunc = () => {
            onlineStore.getRecommendedProducts('test', 'hi');
        };
        expect(testFunc).to.throw(Error, 'Invalid input.');
        let testFunc2 = () => {
            onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 2);
        };
        expect(testFunc2).to.throw(Error, 'Invalid input.')
    })
})