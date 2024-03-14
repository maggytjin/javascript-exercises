
const removeFromArray = function(array, a, b) {
    let removeDup = array.filter((value, index) => array.indexOf(value) === index);
    let indexA = removeDup.indexOf(a);
    const removeA = removeDup.splice(indexA, 1);
    
    if (b) {  
      let indexB = removeDup.indexOf(b);
      const removeB = removeDup.splice(indexB, 1);
    };
  
    return removeDup;
  };



// Do not edit below this line
module.exports = removeFromArray;
