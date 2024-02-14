const convertToCelsius = function(value) {
  celciusValue = (value - 32) * (5 / 9);
  return Math.round(celciusValue * 10) / 10;
};

const convertToFahrenheit = function(value) {
  fahrenheitValue = (value * 9/5) + 32;
  return Math.round(fahrenheitValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
