const palindromes = function (word) {
	let newWord = word
		.toLowerCase()
		.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
		.split(" ")
		.join("");
	// return newWord;
	let reversed = newWord
                    .split("")
                    .reverse()
                    .join("");
	if (newWord === reversed) {
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = palindromes;
