// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function subAlphabet(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  }

  function encoder(input, alphabet) {
    let newAlphabet = subAlphabet(alphabet);
    let message = "";
    
    if (!newAlphabet) {
      return false;
    }

    input = input.toLowerCase();
    
    for (let i = 0; input.length > i; i++) {
      if (input[i] == " ") {
        message += " ";
      } else {
        let index = realAlphabet.indexOf(input[i]);
        message += alphabet[index];
      }
    }
    return message;
  }

  function decoder(input, alphabet) {
    let newAlphabet = subAlphabet(alphabet);
    let message = "";

    if (!newAlphabet) {
      return false;
    }
    input = input.toLowerCase();
    
    for (let i = 0; input.length > i; i++) {
      if (input[i] == " ") {
        message += " ";
      } else {
        let index = alphabet.indexOf(input[i]);
        message += realAlphabet[index];
      }
    }
    return message;
  }


  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
   if (encode) {
    return encoder(input, alphabet);
   } else {
    return decoder(input, alphabet);
   }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
