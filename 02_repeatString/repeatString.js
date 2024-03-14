const repeatString = function(string, num) {
    let repeat = "";
    
    if (num < 0) {
        return "ERROR";
    }
    while (num > 0) {
      repeat += string;
      num--;
    }
    return repeat;
  };

  let string = '';
  let num =  Math.floor(Math.random() * 1000);


// Do not edit below this line
module.exports = repeatString;
