// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// letters to numbers 97 - 122
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {

    let fullMessage = "";

    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    for (let i = 0; i < input.length; i++) {
      let letterValue = input[i].toLowerCase().charCodeAt(0);
      if (letterValue >= 97 && letterValue <= 122) {
        letterValue += shift * (encode ? 1 : -1)
        if (letterValue > 122) {
            letterValue = letterValue - 26;
        }
        if (letterValue < 97) {
            letterValue = letterValue + 26;
        }
      }
      fullMessage += String.fromCharCode(letterValue);
    }
    return fullMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
