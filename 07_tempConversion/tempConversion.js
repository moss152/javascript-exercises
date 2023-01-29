function convertToCelsius (x) {
  let result = (x - 32)*5/9;
  return Number(result.toFixed(1));
};

function convertToFahrenheit(x) {
 let result =(x * 9/5) + 32;

    return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
