const convertToCelsius = function(temp) {
  let num = Math.round((temp - 32) * (5/9) * 10) / 10;
  return num;
};

const convertToFahrenheit = function(temp) {
  let num = Math.round(((temp * (9/5)) + 32) * 10) / 10;
  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
