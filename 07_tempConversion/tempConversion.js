const convertToCelsius = function(fahrenheitTemp) {
  // Receive Fahrenheit
  let celsiusTemp = (fahrenheitTemp - 32) * (5/9)
  // Round to 1 Decimal
  return Math.round(celsiusTemp * 10)/10
};

const convertToFahrenheit = function(celsiusTemp) {
  // Receive Celsius
  let fahrenheitTemp = celsiusTemp * (9/5) + 32
  // Round to 1 Decimal
  return Math.round(fahrenheitTemp * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
