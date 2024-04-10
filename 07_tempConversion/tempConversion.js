const convertToCelsius = function(temp) {
  let tempC;
  tempC = (temp-32) * 5/9;
  return +tempC.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let tempF;
  tempF = (temp * 9/5 +32);
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
