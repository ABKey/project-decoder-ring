const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar() encoding/decoding", () => {
    it("should encode a message by shifting letters", () => {
        const message = "three trees";
        const shift = 3;
        const actual = caesar(message,shift); 
        const expected = "wkuhh wuhhv";

        expect(actual).to.equal(expected);
    });
    it("should encode a message ignoring spaces/symbols.", () => {
        const message = "three trees!";
        const shift = 3;
        const actual = caesar(message,shift); 
        const expected = "wkuhh wuhhv!";

        expect(actual).to.equal(expected);
    });
    it("should decode a message by shifting letters", () => {
        const message = "wkuhh wuhhv";
        const shift = 3;
        const actual = caesar(message,shift,false); 
        const expected = "three trees";

        expect(actual).to.equal(expected);
    });
    it("should return false if shift goes over 25", () => {
        const message = "wkuhh wuhhv";
        const shift = 26;
        const actual = caesar(message,shift);

        expect(actual).to.be.false;
    });
    it("should return false if shift goes under -25", () => {
        const message = "wkuhh wuhhv";
        const shift = -26;
        const actual = caesar(message,shift);

        expect(actual).to.be.false;
    });   
    it("should return false if shift is 0", () => {
        const message = "wkuhh wuhhv";
        const shift = 0;
        const actual = caesar(message,shift);

        expect(actual).to.be.false;
    });
});
