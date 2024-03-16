const sumAll = function(a, b) {
    let sum = 0;
    let array = Array.from(arguments);
    let fullArr = [];
    
    for (let i = array[0]; i <= array[1]; i++){
        sum += i;
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
