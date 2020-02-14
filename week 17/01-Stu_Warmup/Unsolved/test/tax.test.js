var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("tax.js", () => {
    it('should return with 8% tax correctly calculated', () => {
        expect(calculateTax(5)).to.equal("$5.40")
    })
})