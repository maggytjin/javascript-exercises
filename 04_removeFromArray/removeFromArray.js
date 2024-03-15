const removeFromArray = function(array, a, b, c, d) {

    let removeDupe;
    if (!array.includes(a) && !array.includes(b)){
      return array;
    } else if (!array.includes(a) && array.includes(b)) {
      let indexB = array.indexOf(b);
      array.splice(indexB, 1);
      return array;
    } else if (array.includes(a) && array.includes(b) && array.includes(c) && array.includes(d)) {
      let indexA = array.indexOf(a);
      const removeA = array.splice(indexA, 1);
  
      let indexB = array.indexOf(b);
      const removeB = array.splice(indexB, 1);
  
      let indexC = array.indexOf(c);
      const removeC = array.splice(indexC, 1);
  
      let indexD = array.indexOf(d);
      const removeD = array.splice(indexD, 1);
      return array;
    }
  
    removeDupe = array.filter((value, index) => array.indexOf(value) === index);
  
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
