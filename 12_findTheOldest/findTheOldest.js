const findTheOldest = function(array) {
    let currentYear;
    for (let i = 0; i < array.length; i++) {
        if (!array[i].yearOfDeath) {
            let currentDate = new Date();
            currentYear = currentDate.getFullYear();
            array[i].yearOfDeath = currentYear;
        }
    };
    
	for (let i = 0; i < array.length; i++) {
		let age = array[i].yearOfDeath - array[i].yearOfBirth;
		array[i].age = age;
	}
	let sorted = array.sort((a, b) => b.age - a.age);
	return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
