import { describe, it } from "mocha";
import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe('Tests', function () {
    it('choosingDestination functionality', function () {
        let test = function () {
            planYourTrip.choosingDestination('Sofia', 'Summer', 2024);
        }
        expect(test).to.throw(Error, 'This destination is not what you are looking for.');
        let test2 = function () {
            planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023);
        }
        expect(test2).to.throw(Error, 'Invalid Year!');
        expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        expect(planYourTrip.choosingDestination('Ski Resort', 'Spring', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
    });
    it('exploreOptions functionality', function () {
        let test = function () {
            planYourTrip.exploreOptions('hello', 2)
        }
        expect(test).to.throw(Error, 'Invalid Information!');
        let test2 = function () {
            planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 'hi')
        }
        expect(test2).to.throw(Error, 'Invalid Information!');
        let test3 = function () {
            planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 4)
        }
        expect(test3).to.throw(Error, 'Invalid Information!');
        let test4 = function () {
            planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 1.1)
        }
        expect(test4).to.throw(Error, 'Invalid Information!');
        let test5 = function () {
            planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], -2)
        }
        expect(test5).to.throw(Error, 'Invalid Information!');
        const result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);

        expect((result)).to.equal('Skiing, Winter Hiking');
        let test6 = function () {
            planYourTrip.exploreOptions('hi', -2)
        }
        expect(test6).to.throw(Error, 'Invalid Information!');
        let test7 = function () {
            planYourTrip.exploreOptions(1, -2)
        }
        expect(test7).to.throw(Error, 'Invalid Information!');
        let test8 = function () {
            planYourTrip.exploreOptions([], -2)
        }
        expect(test8).to.throw(Error, 'Invalid Information!');
        let test9 = function () {
            planYourTrip.exploreOptions([], 0);
        };
        expect(test9).to.throw(Error, 'Invalid Information!');

    });
    it('estimateExpenses functionality', function () {
        expect(planYourTrip.estimateExpenses(300, 1.2)).to.equal('The trip is budget-friendly, estimated cost is $360.00.');
        expect(planYourTrip.estimateExpenses(1000, 20)).to.equal("The estimated cost for the trip is $20000.00, plan accordingly.");
        let test = function () {
            planYourTrip.estimateExpenses(0, 10);
        }
        expect(test).to.throw(Error, "Invalid Information!");
        let test2 = function () {
            planYourTrip.estimateExpenses(20, -10);
        }
        expect(test2).to.throw(Error, "Invalid Information!");
        let test3 = function () {
            planYourTrip.estimateExpenses('HI', 10);
        }
        expect(test3).to.throw(Error, "Invalid Information!");
        let test4 = function () {
            planYourTrip.estimateExpenses(-1, 10);
        }
        expect(test4).to.throw(Error, "Invalid Information!");
        let test5 = function () {
            planYourTrip.estimateExpenses(-1, -10);
        }
        expect(test5).to.throw(Error, "Invalid Information!");

        let test7 = function () {
            planYourTrip.estimateExpenses(-1, []);
        }
        expect(test7).to.throw(Error, "Invalid Information!");

        let test12 = function () {
            planYourTrip.estimateExpenses(100, 'string');
        }
        expect(test12).to.throw(Error, "Invalid Information!");

        let test8 = function () {
            planYourTrip.estimateExpenses(100, 0);
        }
        expect(test8).to.throw(Error, "Invalid Information!");

        let test9 = function () {
            planYourTrip.estimateExpenses(-1, -10);
        }
        expect(test9).to.throw(Error, "Invalid Information!");

        let test10 = function () {
            planYourTrip.estimateExpenses(0, 0);
        };
        expect(test10).to.throw(Error, 'Invalid Information!');

    })

})