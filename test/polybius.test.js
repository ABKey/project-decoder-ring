const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("polybius() encoding/decoding", () => {
    it("should encode a message by changing each letter to number pairs", () => {
        const message = "three trees";
        const actual = polybius(message); 
        const expected = "4432245151 4424515134";

        expect(actual).to.equal(expected);
    });
    it("should encode a message ignoring spaces", () => {
        const message = "three trees";
        const actual = polybius(message);
        const expected = "4432245151 4424515134";
  
        expect(actual).to.equal(expected);
      });
    it("should decode a message by turning number pairs to letters", () => {
        const message = "4432245151 4424515134"
        const actual = polybius(message, false); 
        const expected = "three trees"

        expect(actual).to.equal(expected);
    });
    it("should decode a message ignoring spaces", () => {
        const message = "4432245151 4424515134";
        const actual = polybius(message, false);
        const expected = "three trees";
  
        expect(actual).to.equal(expected);
      });
    it("should return false if the length of the numbers is odd", () => {
        const message = "121212 2"
        const actual = polybius(message, false);

        expect(actual).to.be.false;
    });
});
