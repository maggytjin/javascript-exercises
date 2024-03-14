const reverseString = function(string) {
    let array = string.split("");
    let reversed = array.reverse();
    let joined = reversed.join("");
    return joined;
  };

let string = '';

// Do not edit below this line
module.exports = reverseString;
