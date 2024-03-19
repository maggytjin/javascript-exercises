const convertToCelsius = function(f) {
	const final = (f - 32) * (5 / 9);
	return parseFloat(final.toFixed(1));
};

const convertToFahrenheit = function(c) {
	const final = (c * (9 / 5)) + 32;
	return parseFloat(final.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
