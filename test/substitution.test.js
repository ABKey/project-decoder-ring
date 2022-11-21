const { expect } = require("chai");
const { substitution } = require("../src/substitution");

  describe("cases of incorrect input given", () => {
    it("should return false if the new alphabet is empty", () => {
      const message = "nonsense";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the new alphabet is not 26 characters", () => {
      const message = "nonsense";
      const alphabet = "nonsense";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the new alphabet contains duplicate characters", () => {
      const message = "nonsense";
      const alphabet = "aahaahaahaahaahaahaahaahaa";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("substitution encoding", () => {
    it("should encode a message by using the new alphabet", () => {
      const message = "nonsense";
      const alphabet = "mnopqrstuvwxyzabcdefghijkl";
      const actual = substitution(message, alphabet);
      const expected = "zazeqzeq";

      expect(actual).to.equal(expected);
    });

    it("should work with any character in new alphabet", () => {
      const message = "nonsense";
      const alphabet = "mnopqrstuvwxy.abcdefghijkl";
      const actual = substitution(message, alphabet);
      const expected = ".a.eq.eq";

      expect(actual).to.equal(expected);
    });

    it("should ignore spaces", () => {
      const message = "non sense";
      const alphabet = "mnopqrstuvwxy.abcdefghijkl";
      const actual = substitution(message, alphabet);
      const expected = ".a. eq.eq";

      expect(actual).to.equal(expected);
    });
});

describe("substitution decoding", () => {
    it("should decode a message by using the new alphabet", () => {
        const message = "zazeqzeq";
        const alphabet = "mnopqrstuvwxyzabcdefghijkl";
        const actual = substitution(message, alphabet, false);
        const expected = "nonsense";

    expect(actual).to.equal(expected);
    });

    it("should work with any character in new alphabet", () => {
        const message = ".a.eq.eq";
        const alphabet = "mnopqrstuvwxy.abcdefghijkl";
        const actual = substitution(message, alphabet, false);
        const expected = "nonsense";

    expect(actual).to.equal(expected);
    });

    it("should ignore spaces", () => {
        const message = ".a. eq.eq";
        const alphabet = "mnopqrstuvwxy.abcdefghijkl";
        const actual = substitution(message, alphabet, false);
        const expected = "non sense";

    expect(actual).to.equal(expected);
    });
});
