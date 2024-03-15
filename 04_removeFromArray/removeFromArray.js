
const removeFromArray = function(array, a, b) {
    if (!array.includes(b) && !array.includes(a)){
      return array;
    } 
    let removeDupe = array.filter((value, index) => array.indexOf(value) === index);
    
    let indexA = removeDupe.indexOf(a);
    const removeA = removeDupe.splice(indexA, 1);
      
    if (b) {  
      let indexB = removeDupe.indexOf(b);
      const removeB = removeDupe.splice(indexB, 1);
    };
    
    return removeDupe;
  
  };



// Do not edit below this line
module.exports = removeFromArray;
