// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const square = [
    ["a", "b", "c", "d","e"],
    ["f", "g", "h", "i/j","k"], 
    ["l", "m", "n", "o","p"], 
    ["q", "r", "s", "t", "u"], 
    ["v", "w", "x", "y", "z"]
  ]

  function letterToCoordinate(letterInput) {
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        if (square[i][j].includes(letterInput)) {
          return `${j + 1}${i + 1}`;
        }
      }
    }
  }

  function coordinateToLetter(x, y) {
    return square[y - 1][x - 1]
  }
    

  function polybius(input, encode = true) {
    let result = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let letterInput = input[i].toLowerCase()
        if (letterInput == " ") {
          result += " ";
        } else {
        result += `${letterToCoordinate(letterInput)}`
        }
      };
      return result;
    } else {
      let CordinatesWithNoSpace = input.replace(" ", "");
      let result = "";
      if (CordinatesWithNoSpace.length % 2 > 0) {
        return false;
      };
      for (let i = 0; i < input.length; i++) {
        if (input[i] == " ") {
          result += " ";
        } else {
          result += `${coordinateToLetter(input[i], input[++i])}`;
        }    
      };
      return result;
    };
  };
  return {
    polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
